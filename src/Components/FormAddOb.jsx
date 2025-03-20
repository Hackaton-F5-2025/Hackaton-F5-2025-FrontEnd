import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormAddOb.css";

function FormAdd() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  
  const [mensajeExito, setMensajeExito] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedFile(file); 
      setValue("fotos", file, { shouldValidate: true });
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (!selectedFile) {
      alert("Por favor, selecciona una imagen");
      return;
    }

    // Preparamo los datos para enviar al archivo
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("amount", data.amount);
    formData.append("price", data.price);
    formData.append("state", data.state);
    formData.append("fotos", selectedFile);

    console.log("Datos aceptados:", Object.fromEntries(formData));

    setMensajeExito("Datos guardados correctamente");

    reset();
    setPreviewImage(null);
    setSelectedFile(null); // Limpiar el archivo seleccionado
    setTimeout(() => setMensajeExito(""), 4000);
  });

  return (
    <div className="form-container">
      <h1>Repuestos</h1>

      <form onSubmit={onSubmit}>
        {/* Nombre */}
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            {...register("name", {
              required: "Nombre es requerido",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        {/* Foto */}
        <div className="input-group">
          <label htmlFor="foto">Foto</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {errors.fotos && <span>{errors.fotos.message}</span>}
        </div>

        {previewImage && (
          <div className="preview-container">
            <img
              src={previewImage}
              alt="Previsualización"
              style={{ width: "250px", marginTop: "10px" }}
            />
          </div>
        )}

        {/* Descripción */}
        <div className="input-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            {...register("description", {
              required: "Debes poner una breve descripción del producto",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        {/* Cantidad */}
        <div className="input-group">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            step="1"
            {...register("amount", {
              required: "La cantidad es requerida",
              min: { value: 1, message: "La cantidad debe ser mayor a 0" },
            })}
          />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>

        {/* Precio */}
        <div className="input-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "El precio es obligatorio",
              min: { value: 0.01, message: "El precio debe ser mayor a 0" },
            })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        {/* Disponibilidad */}
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              {...register("state", {
                required: "Debes indicar la disponibilidad",
              })}
            />
            Disponibilidad
          </label>
          {errors.state && <span>{errors.state.message}</span>}
        </div>

        <button type="submit">Aceptar</button>
        {mensajeExito && <p className="success-message">{mensajeExito}</p>}
      </form>
    </div>
  );
}

export default FormAdd;

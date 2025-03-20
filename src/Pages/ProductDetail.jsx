import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, TextField, Paper, Chip, List, ListItem, ListItemText } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();

  // Datos de ejemplo
  const product = {
    id: 1,
    name: 'Motor de Lavadora Samsung',
    price: 89.99,
    image: 'https://via.placeholder.com/600',
    description: 'Motor de alta calidad compatible con modelos Samsung WF-1234, WF-5678. Incluye garantía de 6 meses.',
    brand: 'Samsung',
    models: ['WF-1234', 'WF-5678', 'WF-9012'],
    category: 'Lavadoras',
    specifications: [
      { label: 'Marca', value: 'Samsung' },
      { label: 'Categoría', value: 'Lavadoras' },
      { label: 'Stock', value: '10 unidades' },
      { label: 'Garantía', value: '6 meses' },
      { label: 'Tiempo de entrega', value: '2-3 días' }
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Chip label={product.brand} sx={{ mr: 1 }} />
            <Chip label={product.category} />
          </Box>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Modelos Compatibles
            </Typography>
            <List dense>
              {product.models.map((model, index) => (
                <ListItem key={index}>
                  <ListItemText primary={model} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Box sx={{ my: 3 }}>
            <TextField
              type="number"
              label="Cantidad"
              defaultValue={1}
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" size="large">
              Agregar al Carrito
            </Button>
          </Box>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Especificaciones
            </Typography>
            {product.specifications.map((spec, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
                  {spec.label}:
                </Typography>
                <Typography variant="body2">
                  {spec.value}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 
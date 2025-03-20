import { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, TextField, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [sortBy, setSortBy] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  // Datos de ejemplo
  const products = [
    // falta por incorporar brand_id
    {
      id: 1,
      name: 'Motor de Lavadora Samsung',
      description: 'Motor compatible con modelos Samsung WF-1234, WF-5678',
      amount: 1,
      price: 89.99,
      image: 'https://via.placeholder.com/300',
      brand_id: 'Samsung',
      // models: ['WF-1234', 'WF-5678'],
      // category: 'Lavadoras'
      state: true,
      
    },
    {
      id: 2,
      name: 'Compresor Refrigerador LG',
      description: 'Compresor compatible con modelos LG RF-1234, RF-5678',
      amount: 3,
      price: 149.99,
      image: 'https://via.placeholder.com/300',
      brand_id: 'LG',
      // models: ['RF-1234', 'RF-5678'],
      // category: 'Refrigeradores'
      state: true
    }    
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Repuestos Disponibles
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Marca"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Modelo"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Ordenar por</InputLabel>
              <Select
                value={sortBy}
                label="Ordenar por"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
                <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
                <MenuItem value="name-asc">Nombre: A-Z</MenuItem>
                <MenuItem value="name-desc">Nombre: Z-A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.amount}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label={product.brand_id} size="small" sx={{ mr: 1 }} />
                  {/* <Chip label={product.category} size="small" /> */}
                </Box>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList; 
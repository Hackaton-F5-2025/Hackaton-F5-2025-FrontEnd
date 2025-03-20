import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import MyCarousel from '../Components/Carousel';

const Home = () => {
  return (
    <div>
    <MyCarousel />
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Repuestos para Electrodomésticos
      </Typography>
      
      <Typography variant="h5" color="text.secondary" paragraph align="center">
        Encuentra los repuestos compatibles con tu electrodoméstico
      </Typography>

      {/* Buscador de compatibilidad */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        justifyContent: 'center', 
        mb: 6,
        flexWrap: 'wrap'
      }}>
        <TextField
          label="Buscar Producto"
          variant="outlined"
          size="large"
          sx={{ minWidth: 300 }}
        />

        <Button 
          variant="contained" 
          size="large"
          startIcon={<SearchIcon />}
          component={Link}
          to="/products"
        >
          Buscar Repuestos
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/300"
              alt="Repuestos por marca"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Por Marca
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Encuentra repuestos específicos para tu marca de electrodoméstico
              </Typography>
              <Button component={Link} to="/products" variant="contained" sx={{ mt: 2 }}>
                Explorar Marcas
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/300"
              alt="Repuestos por categoría"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Por Categoría
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Repuestos para lavadoras, refrigeradores, microondas y más
              </Typography>
              <Button component={Link} to="/products" variant="contained" sx={{ mt: 2 }}>
                Ver Categorías
              </Button>
            </CardContent>
          </Card>
        </Grid> */}

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/300"
              alt="Vendedores verificados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vendedores Verificados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compra con confianza de vendedores certificados
              </Typography>
              <Button component={Link} to="/register" variant="contained" sx={{ mt: 2 }}>
                Vender Repuestos
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Home; 


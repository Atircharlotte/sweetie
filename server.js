import { createServer, Model } from 'miragejs';

createServer({
  models: {
    desserts: Model,
  },
  seeds(server) {
    server.create('dessert', {
      id: '1',
      name: 'Macaron',
      recog: 'macaron',
      price: 100,
      description: 'Hello this is macaron',
      imageUrl: './public/assets/desserts/macaron.jpg',
      type: 'French',
      hostId: '001',
    });
    server.create('dessert', {
      id: '2',
      name: 'Tiramisu',
      recog: 'tiramisu',
      price: 150,
      description: 'Hello this is tiramisu',
      imageUrl: './public/assets/desserts/tiramisu.jpg',
      type: 'Italian',
      hostId: '002',
    });
    server.create('dessert', {
      id: '3',
      name: 'Apple Pie',
      recog: 'applePie',
      price: 80,
      description: 'hello this is apple pie',
      imageUrl: './public/assets/desserts/applePie.jpg',
      type: 'American',
      hostId: '001',
    });
    server.create('dessert', {
      id: '4',
      name: 'Mont Blonc',
      recog: 'montBlanc',
      price: 200,
      description: 'hello this is mont blanc',
      imageUrl: './public/assets/desserts/montBlanc.jpg',
      type: 'French',
      hostId: '002',
    });
    server.create('dessert', {
      id: '5',
      name: 'Cannoli',
      recog: 'cannoli',
      price: 160,
      description: 'Hello this is Cannoli',
      imageUrl: './public/assets/desserts/cannoli.jpg',
      type: 'Italian',
      hostId: '002',
    });
    server.create('dessert', {
      id: '6',
      name: 'Boston Pie',
      recog: 'bostonPie',
      price: 100,
      description: 'Hello this is boston pie',
      imageUrl: './public/assets/desserts/bostonPie.jpg',
      type: 'American',
      hostId: '001',
    });
  },
  routes() {
    this.namespace = 'api';
    this.logging = false; //???????

    this.get('/desserts', (schema) => {
      return schema.desserts.all();
    });

    this.get('/desserts/:id', (schema, request) => {
      let id = request.params.id;
      return schema.desserts.find(id);
    });

    this.get('/host/desserts', (schema) => {
      //hard-code hostId now
      return schema.desserts.where({ hostId: '001' });
    });

    this.get('/host/desserts/:id', (schema, request) => {
      //hard-code hostId now
      let id = request.params.id;
      return schema.desserts.where({ id, histId: '001' });
    });
  },
});

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
      description:
        'Macarons are delicate and colorful French pastries that have gained widespread popularity for their exquisite taste and appearance. These sweet treats consist of two almond meringue shells that sandwich a creamy filling, such as ganache, buttercream, or jam.',
      imageUrl: './public/assets/desserts/macaron.jpg',
      type: 'French',
      hostId: '001',
    });
    server.create('dessert', {
      id: '2',
      name: 'Tiramisu',
      recog: 'tiramisu',
      price: 150,
      description:
        'Tiramisu is a classic Italian dessert known for its rich and indulgent flavor. The name "tiramisu" translates to "pick me up" or "cheer me up" in Italian, which may be attributed to the coffee and cocoa content that provides a caffeinated boost.',
      imageUrl: './public/assets/desserts/tiramisu.jpg',
      type: 'Italian',
      hostId: '002',
    });
    server.create('dessert', {
      id: '3',
      name: 'Apple Pie',
      recog: 'applePie',
      price: 80,
      description:
        ' Apple pie is a classic and beloved dessert that has become an iconic symbol of American culinary traditions. It consists of a flaky pie crust filled with a sweet and spiced apple filling.',
      imageUrl: './public/assets/desserts/applePie.jpg',
      type: 'American',
      hostId: '001',
    });
    server.create('dessert', {
      id: '4',
      name: 'Mont Blonc',
      recog: 'montBlanc',
      price: 200,
      description:
        'Mont Blanc is a classic French dessert known for its elegant presentation and delightful combination of chestnut and cream flavors. The dessert is named after the highest mountain in the Alps, Mont Blanc, and its appearance is meant to resemble a snow-capped peak.',
      imageUrl: './public/assets/desserts/montBlanc.jpg',
      type: 'French',
      hostId: '002',
    });
    server.create('dessert', {
      id: '5',
      name: 'Cannoli',
      recog: 'cannoli',
      price: 160,
      description:
        'Cannoli is a traditional Italian pastry that originated in Sicily. These delightful treats consist of a crispy, tube-shaped shell filled with a sweet and creamy filling, usually containing ricotta cheese. Cannoli are popular both in Italy and around the world, often associated with Italian-American cuisine.',
      imageUrl: './public/assets/desserts/cannoli.jpg',
      type: 'Italian',
      hostId: '002',
    });
    server.create('dessert', {
      id: '6',
      name: 'Boston Pie',
      recog: 'bostonPie',
      price: 100,
      description:
        "Boston Cream Pie is a classic American dessert that originated in Boston, Massachusetts. Despite its name, it's not actually a traditional pie but rather a cake. The dessert typically consists of two layers of sponge cake filled with a rich custard or pastry cream and topped with a smooth chocolate ganache",
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
      return schema.desserts.findBy({ id, hostId: '001' });
    });
  },
});

const axios = require('axios');

const resolvers = {
  Query: {
    orders: async (root, args, ctx) => {
      const { data: orders } = await axios.get(ctx.order.rawSource.handler.config.baseUrl + '/orders');
      
      const userIds = orders.map((order) => order.user_id);
      const productIds = orders.map((order) => order.product_id);

      const users = await Promise.all(
        userIds.map((id) =>
          axios.get(ctx.user.rawSource.handler.config.baseUrl + '/users/' + id).then(({ data }) => data)
        )
      );
      const products = await Promise.all(
        productIds.map((id) =>
          axios.get(ctx.product.rawSource.handler.config.baseUrl + '/products/' + id).then(({ data }) => data)
        )
      );

      orders.forEach((order) => {
        order.user = users.find((user) => user.id === order.user_id);
        order.product = products.find((product) => product.id === order.product_id);
      });

      return orders;
    },
  },
};

module.exports = { resolvers };

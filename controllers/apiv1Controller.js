exports.home = (req, res) => {
  res.send({
    title: 'API Endpoint, woohoo',
    body: {
      message: 'I have a bad feeling about this......',
    },
  });
};
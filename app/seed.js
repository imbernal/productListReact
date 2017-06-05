  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/128.jpg',
      productImageUrl: 'https://www.shareicon.net/download/2016/02/07/281845_ipod_256x256.png',
    },
    {
      id: 2,
      title: 'Yellow Pail',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/lolo.jpg',
      productImageUrl: 'https://www.shareicon.net/data/256x256/2015/12/06/195512_apple_256x256.png',
    },
    {
      id: 3,
      title: 'Yellow Pail',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/130.jpg',
      productImageUrl: 'https://www.shareicon.net/data/256x256/2016/01/18/250770_tv_256x256.png',
    },
    {
      id: 4,
      title: 'Yellow Pail',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
    //   submitterAvatarUrl: 'images/avatars/131.jpg',
      productImageUrl: 'http://warpcomputers.com/wp-content/uploads/2013/07/laptop_grey.png',
    },
  ];

export {products, generateVoteCount};

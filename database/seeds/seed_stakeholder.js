exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stakeholder')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('stakeholder').insert([
        {
          type: 'Organization',
          org_name: 'Greenstand',
          first_name: '',
          last_name: '',
          email: 'hello@greenstand.com',
          phone: '123-123-2122',
          website: 'greenstand.org',
          logo_url: './logo_192x192.png',
          map_name: '/greenstandMap',
          id: '792a4eee-8e18-4750-a56f-91bdec383aa6',
        },
        {
          type: 'Organization',
          org_name: 'Greenstance',
          first_name: '',
          last_name: '',
          email: 'hello@greenstance.com',
          phone: '123-123-1234',
          website: 'greenstance.com',
          logo_url: './logo_192x192.png',
          map_name: '/greenstance',
          id: 'a8567323-88b1-4870-8c48-68d2da3ab356',
        },
        {
          type: 'Organization',
          org_name: 'Green Space',
          first_name: '',
          last_name: '',
          email: 'greenspace@green.com',
          phone: '123-123-1324',
          website: 'greenspace.com',
          logo_url: './logo_192x192.png',
          map_name: '/greenspace',
          id: 'c92189d2-2d55-44bc-a0b4-0dad25dc9f35',
        },
        {
          type: 'Organization',
          org_name: 'Green World',
          first_name: '',
          last_name: '',
          email: 'hi@greenworld.com',
          phone: '123-123-1234',
          website: 'greenworld.com',
          logo_url: './logo_192x192.png',
          map_name: '/greenworld',
          id: '344a6130-9094-4a05-8fd6-faf176593fbc',
        },
        {
          type: 'Organization',
          org_name: 'Child One',
          first_name: '',
          last_name: '',
          email: 'child@gmail.com',
          phone: '123-123-1234',
          website: 'childone.com',
          logo_url: './logo_192x192.png',
          map_name: '/childOne',
          id: '1a05ec87-3c38-4395-b9f3-aa15becedc31',
        },
        {
          type: 'Organization',
          org_name: 'Child Two',
          first_name: '',
          last_name: '',
          email: 'childtwo@gmail.com',
          phone: '123-234-1234',
          website: 'childtwo.com',
          logo_url: './logo_192x192.png',
          map_name: '/childTwo',
          id: '1d2fb06e-e8f7-40de-8e13-ed3eba1abb3a',
        },
        {
          type: 'Person',
          org_name: '',
          first_name: 'Grower',
          last_name: 'One',
          email: 'growerOne@gmail.com',
          phone: '123-123-1234',
          website: '',
          logo_url: './person_192x192.png',
          map_name: '/childtwo',
          id: '35a23de8-f1ab-4409-be79-3c6a158d5bde',
        },
        {
          type: 'Person',
          org_name: '',
          first_name: 'Grower',
          last_name: 'Two',
          email: 'growerTwo@gmail.com',
          phone: '123-123-1235',
          website: '',
          logo_url: './person_192x192.png',
          map_name: '',
          id: '90eef52b-ad55-4953-ace9-6a324ae6cec2',
        },
      ]);
    });
};

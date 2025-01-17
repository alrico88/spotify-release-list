import { AlbumGroup, ArtistSource, GroupColorSchemes, ReleasesOrder } from 'enums'

/** @type {State} */
const state = {
  albums: {
    '0trzLa33oRy05BwlJINuRG': {
      id: '0trzLa33oRy05BwlJINuRG',
      name: 'Noir (Bop Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e02789b7f5e64ad4670c3657809',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '02ZCVD3nqfqNId8lvpvCBb', name: 'BOP' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '6gjkcRBjs91tu1bLOWtrUu': {
      id: '6gjkcRBjs91tu1bLOWtrUu',
      name: 'Patience',
      image: 'https://i.scdn.co/image/ab67616d00001e02b5708a39f5edbe11e91c13a2',
      releaseDate: '2020-12-21',
      artists: { single: [{ id: '0bR5osQX9Kn0wmtUPQQhze', name: 'Need For Mirrors' }] },
      otherArtists: [{ id: '5rncU3Anist7fCIFimM1K2', name: 'Fusion' }],
      totalTracks: 5,
    },
    '3Jmgx15Hvwn5aokhMM792b': {
      id: '3Jmgx15Hvwn5aokhMM792b',
      name: 'Rhythm Is Changing (feat. LOWES) [Mella Dee All Boots In At Once Mix]',
      image: 'https://i.scdn.co/image/ab67616d00001e022feb968137ec4353d21c64ec',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '0bxHci3JIhhKA53n8rH3tT', name: 'High Contrast' }] },
      otherArtists: [{ id: '2iT8KIetokMHRjhj8dJuNn', name: 'Mella Dee' }],
      totalTracks: 2,
    },
    '09VOQplwXpjOKuDopwBTlA': {
      id: '09VOQplwXpjOKuDopwBTlA',
      name: 'Downtown',
      image: 'https://i.scdn.co/image/ab67616d00001e026c03b80b8690714eae422d1f',
      releaseDate: '2020-12-23',
      artists: { single: [{ id: '0tSNYelLMRA52oDWmw5eU3', name: 'Electrosoul System' }] },
      otherArtists: [],
      totalTracks: 20,
    },
    '4MT0HCI1Me2zG0gFtu7QMH': {
      id: '4MT0HCI1Me2zG0gFtu7QMH',
      name: 'Daydreaming (Echo Brown Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e02c96e573b193fad90686c43b8',
      releaseDate: '2020-12-18',
      artists: {
        single: [
          { id: '5i7IOgJzy3Ov00uEmvQVSM', name: 'Echo Brown' },
          { id: '1SztdYGnQZ9QWXdGAjKKAH', name: 'Submorphics' },
        ],
      },
      otherArtists: [],
      totalTracks: 18,
    },
    '7vukIG97H6ycPGJSAis8gF': {
      id: '7vukIG97H6ycPGJSAis8gF',
      name: 'Follow Me (Odd Mob Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e02b35e58539e0f931be60a5b69',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '1yShtQaHjChbToQboKRzgH', name: 'ShockOne' }] },
      otherArtists: [{ id: '4qLwtWhlhyAoQ4S9mSrDW9', name: 'Odd Mob' }],
      totalTracks: 10,
    },
    '2Eqy7ptt36FqPcN9uFQey7': {
      id: '2Eqy7ptt36FqPcN9uFQey7',
      name: 'Bad Things (ShockOne Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e022efe495720a01a38ec06d07b',
      releaseDate: '2020-12-17',
      artists: { single: [{ id: '1yShtQaHjChbToQboKRzgH', name: 'ShockOne' }] },
      otherArtists: [{ id: '11gWrKZMBsGQWmobv3oNfW', name: 'Alison Wonderland' }],
      totalTracks: 9,
    },
    '3n6VZFQMkDoLK5jPmYtnzL': {
      id: '3n6VZFQMkDoLK5jPmYtnzL',
      name: 'Bridged By A Lightwave (Lamorn Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e022b83f608c8771cfbc620d9d8',
      releaseDate: '2020-12-17',
      artists: { single: [{ id: '2CIMQHirSU0MQqyYHq0eOx', name: 'deadmau5' }] },
      otherArtists: [
        { id: '4zxvC7CRGvggq9EWXOpwAo', name: 'Kiesza' },
        { id: '5cfLsokNJlFQisLDtzugO9', name: 'Lamorn' },
      ],
      totalTracks: 12,
    },
    '43o8CMVng4FdPUTpSme9dW': {
      id: '43o8CMVng4FdPUTpSme9dW',
      name: 'Watch Me',
      image: 'https://i.scdn.co/image/ab67616d00001e026b9c8ef62b099fb2e7a06b6d',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '2oyU4eToyQkxAFjkB3blsi', name: 'Sam Binga' }] },
      otherArtists: [{ id: '1T6Em6UJ7pSdgXw5V72YHr', name: 'TT The Artist' }],
      totalTracks: 30,
    },
    '4q12KARGFFPQfSS8F1V40p': {
      id: '4q12KARGFFPQfSS8F1V40p',
      name: "OLD Songs from Youtube That Weren't on Streaming Services Until NOW",
      image: 'https://i.scdn.co/image/ab67616d00001e02c6d10eab1fd943cd1af11673',
      releaseDate: '2020-12-24',
      artists: { album: [{ id: '36kzCQhGfJzrLuZzrHweNV', name: 'Wax' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '38Vwhxf7JAO7ErH2h4j9q0': {
      id: '38Vwhxf7JAO7ErH2h4j9q0',
      name: 'Live Ambients Improvised Recordings, Vol. 1',
      image: 'https://i.scdn.co/image/ab67616d00001e02bb9bc45d88c1eede318db28e',
      releaseDate: '2020-12-24',
      artists: { album: [{ id: '3OsRAKCvk37zwYcnzRf5XF', name: 'Moby' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '1qpwBgcAzRqywtvZN1IMHt': {
      id: '1qpwBgcAzRqywtvZN1IMHt',
      name: 'All Visible Objects (Remixed: DJ Set)',
      image: 'https://i.scdn.co/image/ab67616d00001e0287d09f0cd2159ea1e952bed8',
      releaseDate: '2020-12-18',
      artists: { album: [{ id: '3OsRAKCvk37zwYcnzRf5XF', name: 'Moby' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '6p1hOWJydlPCRjeV3WRJET': {
      id: '6p1hOWJydlPCRjeV3WRJET',
      name: 'Refuge (Chris Paul & Raul Campos Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e02d9a72638d9f4166bfcd50640',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '3OsRAKCvk37zwYcnzRf5XF', name: 'Moby' }] },
      otherArtists: [
        { id: '628bKs2MkVGnAOKRWmmVcJ', name: 'Chris Paul' },
        { id: '1AWWAeXDZOb441Q5S2gnXP', name: 'Raul Campos' },
      ],
      totalTracks: 10,
    },
    '676152T0kumXaGwBRGo6ty': {
      id: '676152T0kumXaGwBRGo6ty',
      name: 'Dangerous Liaisons',
      image: 'https://i.scdn.co/image/ab67616d00001e022d30021dfa19380f9e24061c',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '3ac1UBV3aHTPZ94T0PhfvS', name: 'Seba' }] },
      otherArtists: [{ id: '5y2zJl34nBW6vP0v6tkXwC', name: 'Lowqui' }],
      totalTracks: 420,
    },
    '5ktOJJgnQAOi13siXq1Vdm': {
      id: '5ktOJJgnQAOi13siXq1Vdm',
      name: 'Invisible',
      image: 'https://i.scdn.co/image/ab67616d00001e02338888eaff3cf63fdf4712d5',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '3mupfXo95OeusJKhAJVCUf', name: 'Villem' }] },
      otherArtists: [{ id: '7Cs9gec2EFoo05MWj7m7r4', name: 'Hadley' }],
      totalTracks: 23,
    },
    '5ML0ID0YZa7a1Tt9UrJTsV': {
      id: '5ML0ID0YZa7a1Tt9UrJTsV',
      name: 'Believe in Me',
      image: 'https://i.scdn.co/image/ab67616d00001e0236f6c138ad8d3b2a2588c920',
      releaseDate: '2020-12-21',
      artists: { single: [{ id: '4CBavfYzjrTvV7xCIq6WQu', name: 'Makoto' }] },
      otherArtists: [{ id: '7ihfAlbqCcpFJh58JqLegp', name: 'Paul T & Edward Oberon' }],
      totalTracks: 10,
    },
    '6MuLmPQFlqwWXjZIfqk4Kr': {
      id: '6MuLmPQFlqwWXjZIfqk4Kr',
      name: 'White Horse',
      image: 'https://i.scdn.co/image/ab67616d00001e023897eda920895ef281f84d70',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '4HSQ4ALTUXgWlSrhfc4LNA', name: 'Muffler' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '2h2Kv6e2NpLHbMlxXbOWdK': {
      id: '2h2Kv6e2NpLHbMlxXbOWdK',
      name: 'NQ State of Mind',
      image: 'https://i.scdn.co/image/ab67616d00001e02e204609271cc7ddd0ac3ac3b',
      releaseDate: '2020-12-18',
      artists: { album: [{ id: '4IKdJSimREJMIKDfvYvJHF', name: 'Lenzman' }] },
      otherArtists: [{ id: '4FdqEhl3y09QSyC9tbWHaI', name: 'Dan Stezo' }],
      totalTracks: 10,
    },
    '7o312lHHB0jZrX4B8k4BnZ': {
      id: '7o312lHHB0jZrX4B8k4BnZ',
      name: 'All I Need (Rudimental Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e02f21a7e2433975098af979c70',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '4WN5naL3ofxrVBgFpguzKo', name: 'Rudimental' }] },
      otherArtists: [{ id: '4hf3caW9H8uFwwbv5pFjcg', name: 'Jake Bugg' }],
      totalTracks: 10,
    },
    '2wdWuOATpQNFElRQPxUgSX': {
      id: '2wdWuOATpQNFElRQPxUgSX',
      name: 'Energy / Mechanica Remix',
      image: 'https://i.scdn.co/image/ab67616d00001e028060caee9f42d3c3fee75fc1',
      releaseDate: '2020-12-18',
      artists: {
        single: [
          { id: '5ehDsOO7Jubvuk67gpspb4', name: 'Arkaik' },
          { id: '4jNVvaA8qqUSM7bvMSuIGm', name: 'Bredren' },
        ],
      },
      otherArtists: [{ id: '0w7BjgeJXfNeglCzCnsfcv', name: 'Swift' }],
      totalTracks: 10,
    },
    '23fsap8rIKsbRAl8WqJodr': {
      id: '23fsap8rIKsbRAl8WqJodr',
      name: 'Wormhole',
      image: 'https://i.scdn.co/image/ab67616d00001e02732d3c2a37948052d5d18d29',
      releaseDate: '2020-12-22',
      artists: { single: [{ id: '54qqaSH6byJIb8eFWxe3Pj', name: 'Mefjus' }] },
      otherArtists: [{ id: '35dxfY1wywqVRUEaVuMm13', name: 'Bou' }],
      totalTracks: 10,
    },
    '5mEM75XPkNRvVyR0Scv4o3': {
      id: '5mEM75XPkNRvVyR0Scv4o3',
      name: "Summer's Day",
      image: 'https://i.scdn.co/image/ab67616d00001e0266644280ba780b7c4a1a91f8',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5FsfZj0Mp6YwEWytuJUcWt', name: 'Jinsang' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '1rVqY6jpPH7efDyrVIzvnZ': {
      id: '1rVqY6jpPH7efDyrVIzvnZ',
      name: 'Slightest Moment (Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e0209b0c81d45f0753a8fbcc81b',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5PKeA9LeUfSjUhy1ja1lsg', name: 'Zero T' }] },
      otherArtists: [{ id: '7jlbVCvHj8I4OKUPe1NpEd', name: 'Unitsouled' }],
      totalTracks: 10,
    },
    '1T0U1Uv9FXkmGoHRB6MxCO': {
      id: '1T0U1Uv9FXkmGoHRB6MxCO',
      name: 'XR2i',
      image: 'https://i.scdn.co/image/ab67616d00001e02ca5a8c999709c7fd97772af4',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5Pexua3J92rqhQvEqTcRKP', name: 'Voltage' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '0DpwUkrToegPsVbYLrcnlO': {
      id: '0DpwUkrToegPsVbYLrcnlO',
      name: 'Storm',
      image: 'https://i.scdn.co/image/ab67616d00001e029253574805ff1d8c75610cd6',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5RPzPJCg4ER1LzQkorZ31p', name: 'Worakls' }] },
      otherArtists: [{ id: '7i3Xc8Q0FEGHlsERoPgejc', name: 'Rusanda Panfili' }],
      totalTracks: 10,
    },
    '6VtIjuzjGYmOYIvDuULSbp': {
      id: '6VtIjuzjGYmOYIvDuULSbp',
      name: 'Re: IMANU',
      image: 'https://i.scdn.co/image/ab67616d00001e024ed793e1d209fbacc10f2332',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5Y7rFm0tiJTVDzGLMzz0W1', name: 'IMANU' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '6QkaLeuxTaYibek4fhwpmF': {
      id: '6QkaLeuxTaYibek4fhwpmF',
      name: 'Diplo Presents Thomas Wesley: Snake Oil (Deluxe)',
      image: 'https://i.scdn.co/image/ab67616d00001e026453b343cf45952efa4cfd73',
      releaseDate: '2020-12-18',
      artists: { album: [{ id: '5fMUXHkw8R8eOP2RNVYEZX', name: 'Diplo' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '4FLy5bpcOhyKRc1lUpXzak': {
      id: '4FLy5bpcOhyKRc1lUpXzak',
      name: "Music To Stay In Your House To (Buunshin's Go Outside Remix)",
      image: 'https://i.scdn.co/image/ab67616d00001e0294656f239b8156be9c9ee176',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '5ucX3eT8wlEQGRVwUyeqBj', name: 'Buunshin' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '5tPy58BDmoBCBqdqUqZwVy': {
      id: '5tPy58BDmoBCBqdqUqZwVy',
      name: 'Fever (Oklou Remix)',
      image: 'https://i.scdn.co/image/ab67616d00001e024dfbb8fb1f3320d24132a630',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '6M2wZ9GZgrQXHCFfjv46we', name: 'Dua Lipa' }] },
      otherArtists: [
        { id: '3QVolfxko2UyCOtexhVTli', name: 'Angèle' },
        { id: '6fFcUOFcbjeIuEomuUthkw', name: 'Oklou' },
      ],
      totalTracks: 10,
    },
    '11IHuohdssMJA8s84Yhk1p': {
      id: '11IHuohdssMJA8s84Yhk1p',
      name: 'The Breed',
      image: 'https://i.scdn.co/image/ab67616d00001e023944d255c148378de52911ad',
      releaseDate: '2020-12-21',
      artists: { single: [{ id: '6ZslPRiDjYFasSPscHF7v2', name: 'Command Strange' }] },
      otherArtists: [{ id: '3Y59xKAazzqr4AwzF6LYfR', name: 'L-Side' }],
      totalTracks: 10,
    },
    '4gyjeOHUtt0kwS9AOHF0to': {
      id: '4gyjeOHUtt0kwS9AOHF0to',
      name: 'Untitled Soul',
      image: 'https://i.scdn.co/image/ab67616d00001e02bb8ceaa81f0ef2a8698842a2',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '6bFVG82TmMLbnFFBqG9LYa', name: 'Redeyes' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '1YVvYgAn7qwovtxGQaknDv': {
      id: '1YVvYgAn7qwovtxGQaknDv',
      name: 'Chill Oldschool Hip Hop Gaming Beats',
      image: 'https://i.scdn.co/image/ab67616d00001e02d988fefddf761d0e3858dfa2',
      releaseDate: '2020-12-20',
      artists: { album: [{ id: '6dZAVi5PugDwlAnH8KMEGl', name: 'Video Games Live' }] },
      otherArtists: [
        { id: '2pOjHBNp2C2neNAvbx8fvN', name: 'Gaming Beats' },
        { id: '0HbCLLOj9URkeKk0uI3NIx', name: 'Gaming Hip Hop' },
      ],
      totalTracks: 10,
    },
    '5Yee5pMi0X2mUyJ5P00IXG': {
      id: '5Yee5pMi0X2mUyJ5P00IXG',
      name: 'ZEF GOEMA MEGAMIX',
      image: 'https://i.scdn.co/image/ab67616d00001e024db320024ce066c4a1fc4d2f',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '6urkHDoIVO1WO8vNIwcJmM', name: 'Die Antwoord' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '0HAA44QdNiOCQuwJ11d8Jk': {
      id: '0HAA44QdNiOCQuwJ11d8Jk',
      name: 'Top2Bottom VIP',
      image: 'https://i.scdn.co/image/ab67616d00001e02b174890f73c2ff214e293273',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '76KMDlhW2f4qiTlepW5yfy', name: 'FD' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '3Exb2xlWVzBFRMEwt2gklD': {
      id: '3Exb2xlWVzBFRMEwt2gklD',
      name: 'Unforgiving',
      image: 'https://i.scdn.co/image/ab67616d00001e021fd533ffe46c10c42e5fc315',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '7DrL4NTd8JcbCpxOvdCnV9', name: 'QZB' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '0I5DYVu31cREbG8IKWYEXO': {
      id: '0I5DYVu31cREbG8IKWYEXO',
      name: 'Maze',
      image: 'https://i.scdn.co/image/ab67616d00001e0235c37bd7f8fa8b7693ef9c3f',
      releaseDate: '2020-12-18',
      artists: { single: [{ id: '7JwMjNkjJZxDmRTO6TBg9A', name: 'Indivision' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '3MKvhQoFSrR2PrxXXBHe9B': {
      id: '3MKvhQoFSrR2PrxXXBHe9B',
      name: 'Music To Be Murdered By - Side B (Deluxe Edition)',
      image: 'https://i.scdn.co/image/ab67616d00001e02b84b0516d901f95461bb5165',
      releaseDate: '2020-12-18',
      artists: { album: [{ id: '7dGJo4pcD2V6oG8kP0tJRR', name: 'Eminem' }] },
      otherArtists: [],
      totalTracks: 10,
    },
    '7JhGOo4ojHVgNbFdxHGUgD': {
      id: '7JhGOo4ojHVgNbFdxHGUgD',
      name: 'Music To Be Murdered By - Side B (Deluxe Edition)',
      image: 'https://i.scdn.co/image/ab67616d00001e026851bc06fc0d85bbe74cffd7',
      releaseDate: '2020-12-18',
      artists: { album: [{ id: '7dGJo4pcD2V6oG8kP0tJRR', name: 'Eminem' }] },
      otherArtists: [],
      totalTracks: 10,
    },
  },
  authorizing: false,
  syncing: false,
  syncingProgress: 0,
  lastSync: '2020-12-24T10:09:32.229Z',
  previousSyncMaxDate: '2020-12-24',
  creatingPlaylist: false,
  playlistId: null,
  playlistForm: { name: null, description: null, isPrivate: null },
  user: {
    id: '11124298134',
    name: 'Jakub Dobes',
    image: 'testImageUrl',
  },
  message: null,
  playlistModalVisible: false,
  filtersVisible: false,
  settings: {
    artistSources: [ArtistSource.FOLLOWED],
    minimumSavedTracks: 1,
    groups: [AlbumGroup.ALBUM, AlbumGroup.SINGLE],
    groupColors: GroupColorSchemes.DEFAULT,
    days: 7,
    theme: 'theme-compact',
    uriLinks: false,
    covers: true,
    autoSync: false,
    autoSyncTime: '08:00',
    notifications: true,
    firstDayOfWeek: 0,
    displayTracks: false,
    fullAlbumData: false,
    displayLabels: false,
    displayPopularity: false,
    labelBlocklist: '',
    artistBlocklist: '',
    releasesOrder: ReleasesOrder.ARTIST,
    trackHistory: true,
  },
  filters: {
    groups: [],
    search: '',
    startDate: null,
    endDate: null,
    excludeVariousArtists: false,
    excludeRemixes: false,
    excludeDuplicates: false,
    favoritesOnly: false,
    newOnly: false,
  },
  seenFeatures: [],
  updateReady: false,
  favorites: {},
  editingFavorites: false,
  lastSettingsPath: null,
  labelBlocklistHeight: null,
}

export default state

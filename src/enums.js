const GITHUB = 'https://github.com/jakubito/spotify-release-list'

/** @enum {string} */
export const Address = {
  GITHUB,
  GITHUB_PROFILE: 'https://github.com/jakubito',
  PRIVACY: `${GITHUB}/blob/master/PRIVACY.md`,
  CREDITS: `${GITHUB}/blob/master/CREDITS.md`,
  CHANGELOG: `${GITHUB}/releases`,
  DONATE: 'https://paypal.me/jakubito',
  EMAIL: 'mailto:dobes.jakub@gmail.com',
  DEMO: 'https://demo--spotifyreleaselist.netlify.app',
}

/** @enum {string} */
export const Scope = {
  USER_FOLLOW_READ: 'user-follow-read',
  USER_LIBRARY_READ: 'user-library-read',
  PLAYLIST_MODIFY_PRIVATE: 'playlist-modify-private',
  PLAYLIST_MODIFY_PUBLIC: 'playlist-modify-public',
}

/** @enum {string} */
export const SpotifyEntity = {
  ALBUM: 'album',
  ARTIST: 'artist',
  PLAYLIST: 'playlist',
  TRACK: 'track',
}

/** @enum {string} */
export const MomentFormat = {
  ISO_DATE: 'YYYY-MM-DD',
  MONTH_NAME: 'MMMM',
}

/** @type {ArtistSourceEnum} */
export const ArtistSource = {
  FOLLOWED: 'followed',
  SAVED_TRACKS: 'saved-tracks',
  SAVED_ALBUMS: 'saved-albums',
}

const { FOLLOWED, SAVED_TRACKS, SAVED_ALBUMS } = ArtistSource

/** @type {[group: ArtistSource, label: string][]} */
export const ArtistSourceLabels = [
  [FOLLOWED, 'Followed artists'],
  [SAVED_ALBUMS, 'Saved albums'],
  [SAVED_TRACKS, 'Liked songs'],
]

/** @type {ReleasesOrderEnum} */
export const ReleasesOrder = {
  ARTIST: 'artist',
  ALBUM_GROUP: 'album-group',
}

/** @type {[group: ReleasesOrder, label: string][]} */
export const ReleasesOrderLabels = [
  [ReleasesOrder.ARTIST, 'Artist name'],
  [ReleasesOrder.ALBUM_GROUP, 'Album type → Artist name'],
]

/** @type {AlbumGroupEnum} */
export const AlbumGroup = {
  ALBUM: 'album',
  SINGLE: 'single',
  COMPILATION: 'compilation',
  APPEARS_ON: 'appears_on',
}

const { ALBUM, SINGLE, COMPILATION, APPEARS_ON } = AlbumGroup

/** @type {{ [key in AlbumGroup]: number }} */
export const AlbumGroupIndex = {
  [ALBUM]: 0,
  [SINGLE]: 1,
  [COMPILATION]: 2,
  [APPEARS_ON]: 3,
}

/** @type {[group: AlbumGroup, label: string][]} */
export const AlbumGroupLabels = [
  [ALBUM, 'Albums'],
  [SINGLE, 'Singles'],
  [COMPILATION, 'Compilations'],
  [APPEARS_ON, 'Appearances'],
]

/** @enum {GroupColorScheme} */
export const GroupColorSchemes = {
  DEFAULT: {
    [ALBUM]: '#e04c71',
    [SINGLE]: '#a779c5',
    [COMPILATION]: '#dcad4f',
    [APPEARS_ON]: '#19a34a',
  },
  ORIGINAL: {
    [ALBUM]: '#19a34a',
    [SINGLE]: '#19a34a',
    [COMPILATION]: '#19a34a',
    [APPEARS_ON]: '#19a34a',
  },
  WHITE: {
    [ALBUM]: '#f5f5f5',
    [SINGLE]: '#f5f5f5',
    [COMPILATION]: '#f5f5f5',
    [APPEARS_ON]: '#f5f5f5',
  },
}

/** @enum {string} */
export const Theme = {
  COMPACT: 'theme-compact',
  SINGLE_COLUMN: 'theme-single-column',
}

/** @enum {string} */
export const Market = {
  AL: 'Albania',
  DZ: 'Algeria',
  AD: 'Andorra',
  AO: 'Angola',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BR: 'Brazil',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  TD: 'Chad',
  CL: 'Chile',
  CO: 'Colombia',
  KM: 'Comoros',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czechia',
  CI: "Côte d'Ivoire",
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  EE: 'Estonia',
  SZ: 'Eswatini',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GR: 'Greece',
  GD: 'Grenada',
  GT: 'Guatemala',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IE: 'Ireland',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  XK: 'Kosovo',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MR: 'Mauritania',
  MU: 'Mauritius',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MA: 'Morocco',
  MZ: 'Mozambique',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  MK: 'North Macedonia',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestine, State of',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PL: 'Poland',
  PT: 'Portugal',
  QA: 'Qatar',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  ZA: 'South Africa',
  KR: 'South Korea',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SR: 'Suriname',
  SE: 'Sweden',
  CH: 'Switzerland',
  TW: 'Taiwan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VN: 'Vietnam',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
}

// Unsplash-bilder for hver dag
export const dayImages = {
  1:  { cdnBase: 'photo-1720607688322-4bebff5d541e', credit: 'Lars Portjanow', username: 'larsportjanow', photoId: 'BKCoJAU7rfE' },
  2:  { cdnBase: 'photo-1541791940715-e571aa1c3d32', credit: 'Lucas Carl', username: 'lucas_carl', photoId: '2mqqvfGVK8A' },
  3:  { cdnBase: 'photo-1643193839079-e6ee352d9043', credit: 'Andréa Villiers', username: 'lemondeavecandrea', photoId: '0bOVmBAUogM' },
  4:  { cdnBase: 'photo-1659640860300-d8803c5e1f1f', credit: 'Niels Bosman', username: 'niels_to', photoId: '64spGeJJC3U' },
  5:  { cdnBase: 'photo-1665764630018-fbd45d77b163', credit: 'Datingjungle', username: 'datingjungle', photoId: '8awEqnZDF80' },
  6:  { cdnBase: 'photo-1531250552633-528fe896fdd4', credit: 'Dan Wilding', username: 'danwilding', photoId: 'IQ1EuGwD-Lw' },
  7:  { cdnBase: 'photo-1587931693473-9598be66ae1c', credit: 'Guillaume QL', username: 'georges015', photoId: 'bMbRswbmIp0' },
  8:  { cdnBase: 'photo-1647526232039-6099babcca81', credit: 'Quick PS', username: 'quickps', photoId: 'ComgJww3q1U' },
  9:  { cdnBase: 'photo-1663845183777-136ef563e46b', credit: 'Hans-Jurgen Weinhardt', username: 'hansjuergen', photoId: '2BlPUNH2g7U' },
  10: { cdnBase: 'photo-1719396727280-1972257abe18', credit: 'Jametlene Reskp', username: 'reskp', photoId: 'HC9sjCsEJ6Q' },
  11: { cdnBase: 'photo-1562687598-40393b4d426b', credit: 'Xuan Nguyen', username: 'darthxuan', photoId: 'ricmOR_T2rM' },
  12: { cdnBase: 'photo-1722616588626-f1a6c231479f', credit: 'Bo Zhang', username: 'bozh_ntu', photoId: 'aqEV4eBXFDI' },
  13: { cdnBase: 'photo-1628316492043-567795b66ef5', credit: 'Peter Herrmann', username: 'tama66', photoId: 'EMNOVf_ITZQ' },
  14: { cdnBase: 'photo-1584999534798-5f4dc63b48db', credit: 'Vered Caspi', username: 'veredcc', photoId: 'unwoHpmX8sw' },
  15: { cdnBase: 'photo-1652881052438-2177e94c2f77', credit: 'Alexander Schimmeck', username: 'alschim', photoId: 'JqjS0ZP8TaQ' },
  16: { cdnBase: 'photo-1731742013335-1b2c2a852be4', credit: 'Wolfgang Weiser', username: 'hamburgmeinefreundin', photoId: 'WRerMBRYoyE' },
  17: { cdnBase: 'photo-1473615695634-d284ec918736', credit: 'Claudio Testa', username: 'claudiotesta', photoId: 'qpemSW6_1Z0' },
  18: { cdnBase: 'photo-1430000589629-f04107b5597c', credit: 'Vidar Kristiansen', username: 'vidar', photoId: 'qv5yb436qRI' },
};

const UTM = '?utm_source=tdf_reiseguide&utm_medium=referral';

export function attachImages(days) {
  days.forEach(d => {
  const img = dayImages[d.day];
  if (img) {
    d.image = {
      hero: `https://images.unsplash.com/${img.cdnBase}?w=1200&h=400&fit=crop&auto=format&q=80`,
      thumb: `https://images.unsplash.com/${img.cdnBase}?w=600&h=340&fit=crop&auto=format&q=80`,
      credit: img.credit,
      creditUrl: `https://unsplash.com/@${img.username}${UTM}`,
      photoUrl: `https://unsplash.com/photos/${img.photoId}${UTM}`,
    };
  }
});
}

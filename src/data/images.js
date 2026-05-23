// Unsplash-bilder for hver dag
export const dayImages = {
  1:  { cdnBase: 'photo-1720607688322-4bebff5d541e', credit: 'Lars Portjanow', username: 'larsportjanow', photoId: 'BKCoJAU7rfE' },
  2:  { cdnBase: 'photo-1684698769392-c6404a6427cb', credit: 'Winston Tjia', username: 'winstontjia', photoId: 'YXnXW6qTqgg' },
  3:  { cdnBase: 'photo-1643193839079-e6ee352d9043', credit: 'Andréa Villiers', username: 'lemondeavecandrea', photoId: '0bOVmBAUogM' },
  4:  { cdnBase: 'photo-1659640860300-d8803c5e1f1f', credit: 'Niels Bosman', username: 'niels_to', photoId: '64spGeJJC3U' },
  5:  { cdnBase: 'photo-1665764630018-fbd45d77b163', credit: 'Datingjungle', username: 'datingjungle', photoId: '8awEqnZDF80' },
  6:  { cdnBase: 'photo-1531250552633-528fe896fdd4', credit: 'Dan Wilding', username: 'danwilding', photoId: 'IQ1EuGwD-Lw' },
  7:  { cdnBase: 'photo-1587931693473-9598be66ae1c', credit: 'Guillaume QL', username: 'georges015', photoId: 'bMbRswbmIp0' },
  8:  { cdnBase: 'photo-1647526232039-6099babcca81', credit: 'Quick PS', username: 'quickps', photoId: 'ComgJww3q1U' },
  9:  { cdnBase: 'photo-1663845183777-136ef563e46b', credit: 'Hans-Jurgen Weinhardt', username: 'hansjuergen', photoId: '2BlPUNH2g7U' },
  10: { cdnBase: 'photo-1719396727280-1972257abe18', credit: 'Jametlene Reskp', username: 'reskp', photoId: 'HC9sjCsEJ6Q' },
  11: { cdnBase: 'photo-1562687598-40393b4d426b', credit: 'Xuan Nguyen', username: 'darthxuan', photoId: 'ricmOR_T2rM' },
  12: { cdnBase: 'photo-1654298900117-57d82e6471a0', credit: 'Piermario Eva', username: 'p1mm1', photoId: 'MNVdx_nOkEs' },
  13: { cdnBase: 'photo-1707212216690-bf13dfd7399c', credit: 'Éole Wind', username: 'eolewind', photoId: 'J_vLvj4HOpQ' },
  14: { cdnBase: 'photo-1546790971-f16f7ebb83af', credit: 'Niklas Hamann', username: 'niklas_hamann', photoId: 'MY4QimVDh2U' },
  15: { cdnBase: 'photo-1645031003376-fd68e7baa6ec', credit: 'Katharina Bill', username: 'katharina_bill', photoId: 'VJrDXrnrEKg' },
  16: { cdnBase: 'photo-1430000589629-f04107b5597c', credit: 'Vidar Kristiansen', username: 'vidar', photoId: 'qv5yb436qRI' },
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

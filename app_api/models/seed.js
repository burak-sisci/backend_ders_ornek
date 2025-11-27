var mongoose = require('mongoose');
require('./db');
var Venue = mongoose.model('venue');

var mekanlar = [
    {
        name: 'Starbucks Kadıköy',
        address: 'Bahariye Cad. No: 34, Kadıköy, İstanbul',
        rating: 4,
        foodanddrink: ['Kahve', 'Çay', 'Tatlı', 'Sandviç'],
        coordinates: [29.0286, 40.9909],
        hours: [
            { day: 'Pazartesi - Cuma', open: 800, close: 2300, isClosed: false },
            { day: 'Cumartesi - Pazar', open: 900, close: 2400, isClosed: false }
        ],
        comments: [
            { author: 'Burak Şişçi', rating: 5, text: 'Harika bir ortam ve lezzetli kahveler!' }
        ]
    },
    {
        name: 'Mado Beşiktaş',
        address: 'Sinanpaşa Mah. Şair Nedim Cad. No: 15, Beşiktaş, İstanbul',
        rating: 3,
        foodanddrink: ['Dondurma', 'Sütlaç', 'Kahvaltı'],
        coordinates: [29.0068, 41.0402],
        hours: [
            { day: 'Her Gün', open: 700, close: 100, isClosed: false }
        ],
        comments: [
            { author: 'Ayşe Yılmaz', rating: 3, text: 'Dondurması güzel ama servis yavaş.' }
        ]
    },
    {
        name: 'Tarihi Yarımada Köftecisi',
        address: 'Divanyolu Cad. No: 12, Sultanahmet, İstanbul',
        rating: 5,
        foodanddrink: ['Köfte', 'Piyaz', 'Salata'],
        coordinates: [28.9769, 41.0082],
        hours: [
            { day: 'Pazartesi - Cumartesi', open: 1100, close: 2200, isClosed: false },
            { day: 'Pazar', open: 0, close: 0, isClosed: true }
        ],
        comments: [
            { author: 'Mehmet Kaya', rating: 5, text: 'İstanbul\'un en iyi köftesi!' }
        ]
    },
    {
        name: 'Nusr-Et Steakhouse Etiler',
        address: 'Nispetiye Cad. No: 87, Etiler, İstanbul',
        rating: 4,
        foodanddrink: ['Et', 'Steak', 'Şarap'],
        coordinates: [29.0336, 41.0777],
        hours: [
            { day: 'Her Gün', open: 1200, close: 2400, isClosed: false }
        ],
        comments: [
            { author: 'Gizem Demir', rating: 4, text: 'Pahalı ama lezzetli bir deneyim.' }
        ]
    },
    {
        name: 'Cihangir Kahvesi',
        address: 'Cihangir Mah. Akarsu Cad. No: 10, Beyoğlu, İstanbul',
        rating: 4,
        foodanddrink: ['Kahve', 'Ev Yapımı Limonata', 'Kek'],
        coordinates: [28.9836, 41.0315],
        hours: [
            { day: 'Her Gün', open: 900, close: 2200, isClosed: false }
        ],
        comments: [
            { author: 'Canan Öztürk', rating: 4, text: 'Sakin ve huzurlu bir mekan.' }
        ]
    }
];

async function seedDatabase() {
    try {
        await Venue.deleteMany({});
        console.log('Mevcut mekanlar silindi.');
        const docs = await Venue.insertMany(mekanlar);
        console.log(docs.length + ' adet mekan başarıyla eklendi.');
    } catch (err) {
        console.error('Veritabanı işlemleri sırasında hata oluştu:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();

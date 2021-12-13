// Limit
const limitend = (pushname) => {
        return`*Maaf ${pushname} Limit Anda Hari Ini Sudah Habis\n\n Silahkan Kembali Lagi Hari Esok:)\n\n Limit Di Reset Ketik Owner Gabut:v*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
export default function Footer({totalItems, checkedItems,presentase}) {
    if (!totalItems) {
        return <footer className="stats">Tidak ada barang di daftar belanjaan</footer>
    }
    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli {presentase}%)</footer>
}
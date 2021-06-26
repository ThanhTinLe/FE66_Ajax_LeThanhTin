// getNhanVienAPI();
// var arrNhanVien = [];
// var kiemTraDuLieu = new validate();
// document.querySelector('#btnXacNhan').onclick = function (event) {
//     event.preventDefault(); //Chặn sự kiện reload browser
//     {
//         var nhanVien = new NhanVien();
//         //Bước 1 Lấy thông tin người dùng nhập vào từ giao diện
//         nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
//         nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
//         var heso = nhanVien.heSoChucVu = document.querySelector('#chucVu').value;

//         if(heso === '1'){
//             nhanVien.chucVu = 'Nhân viên';
//         }else if(heso === '2'){
//             nhanVien.chucVu = 'Quản lí';
//         }else if(heso === '3'){
//             nhanVien.chucVu = 'Giám đốc';
//         }

//         nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
//         nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;
//         var tongLuong = nhanVien.tongLuong();
//         var xepLoaiSV = nhanVien.xepLoai();
//         // console.log('nhanVien', nhanVien);

//     }

//     //-----------------------------------Validation-------------------------------------
//     // (1): Kiểm tra rỗng
//     var valid = true;
//     valid &= kiemTraDuLieu.KiemTraRong(nhanVien.maNhanVien, '#error_required_maNhanVien', 'Mã nhân viên') & kiemTraDuLieu.KiemTraRong(nhanVien.tenNhanVien, '#error_required_tenNhanVien', 'Tên nhân viên') & kiemTraDuLieu.KiemTraRong(nhanVien.luongCoBan, '#error_required_luongCoBan    ', 'Lương cơ bản') & kiemTraDuLieu.KiemTraRong(nhanVien.soGioLamTrongThang, '#error_required_soGioLamTrongThang', 'Số giờ làm');
//     if (kiemTraDuLieu.KiemTraRong(nhanVien.maNhanVien, '#error_required_maNhanVien', 'Mã nhân viên') === true) {
//         valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.maNhanVien, '#error_all_digi_maNhanVien', 'Mã nhân Viên');
//         if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.maNhanVien, '#error_all_digi_maNhanVien', 'Mã nhân Viên') === true) {
//             valid &= kiemTraDuLieu.kiemTraDoDai(nhanVien.maNhanVien, '#error_maxLenght_maNhanVien', 4, 6, 'Mã nhân viên');
//         }
//     }

//     if (kiemTraDuLieu.KiemTraRong(nhanVien.tenNhanVien, '#error_required_tenNhanVien', 'Tên nhân viên') === true) {
//         valid &= kiemTraDuLieu.kiemTraTatCaKyTu(nhanVien.tenNhanVien, '#error_allLetter_tenNhanVien', 'Tên nhân viên');
//     }

//     if (kiemTraDuLieu.KiemTraRong(nhanVien.luongCoBan, '#error_required_luongCoBan', 'Lương cơ bản') === true) {
//         valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.luongCoBan, '#error_all_digi_luongCoBan', 'Lương cơ bản');
//         if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.luongCoBan, '#error_all_digi_luongCoBan', 'Lương cơ bản') === true) {
//             valid &= kiemTraDuLieu.kiemTraGiaTri(nhanVien.luongCoBan, '#error_min_max_length_luongCoBan', 1000000, 20000000, 'Lương cơ bản', 'đồng');
//         }
//     }

//     if (kiemTraDuLieu.KiemTraRong(nhanVien.soGioLamTrongThang, '#error_required_soGioLamTrongThang', 'Số giờ làm') === true) {
//         valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.soGioLamTrongThang, '#error_all_digi_soGioLamTrongThang', 'Số giờ làm trong tháng');
//         if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.soGioLamTrongThang, '#error_all_digi_soGioLamTrongThang', 'Số giờ làm trong tháng') === true) {
//             valid &= kiemTraDuLieu.kiemTraGiaTri(nhanVien.soGioLamTrongThang, '#error_min_max_length_soGioLamTrongThang', 50, 150, 'Số giờ làm trong tháng', 'giờ');
//         }
//     }


//     if (!valid) {
//         return;
//     }

//     // arrNhanVien.push(nhanVien);
//     // console.log('arrNhanVien', arrNhanVien);
//     // console.log(nhanVien.tongLuong())
//     // console.log(nhanVien.xepLoai());
//     // renderTableSinhVien(arrNhanVien);
// }


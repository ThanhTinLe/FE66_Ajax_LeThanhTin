var checkid = [];
function renderTableNhanVien(arrNV) {
    var content = '';
    for (var i = 0; i < arrNV.length; i++) {
        var nv = arrNV[i];
        var nhanVien = new NhanVien(nv.maNhanVien, nv.tenNhanVien, nv.chucVu, nv.heSoChucVu, nv.luongCoBan, nv.soGioLamTrongThang);
        var trNhanVien = `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.luongCoBan}</td>
                <td>${nhanVien.tongLuong()}</td>
                <td>${nhanVien.soGioLamTrongThang}</td>
                <td>${nhanVien.xepLoai()}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.maNhanVien}')" >Xoá
                </td>
            </tr>
        `;
        content += trNhanVien;
        checkid.push(nhanVien.maNhanVien);
    }
    console.log(checkid);
    document.querySelector('#tblNhanVien').innerHTML = content;

}

function getNhanVienAPI() {

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
        method: 'GET',
        responseType: 'json'
    });

    promise.then(function (result) {
        renderTableNhanVien(result.data);
    });

    promise.catch(function (errors) {
        console.log('errors', errors);
    });
}
getNhanVienAPI();
var arrNhanVien = [];
var kiemTraDuLieu = new validate();
document.querySelector('#btnXacNhan').onclick = function (event) {

    event.preventDefault();
    {
        var nhanVien = new NhanVien();

        nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
        nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
        var heso = nhanVien.heSoChucVu = document.querySelector('#chucVu').value;

        if (heso === '1') {
            nhanVien.chucVu = 'Nhân viên';
        } else if (heso === '2') {
            nhanVien.chucVu = 'Quản lí';
        } else if (heso === '3') {
            nhanVien.chucVu = 'Giám đốc';
        }

        nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
        nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;
        console.log('nhanVien', nhanVien);

    }

    //-----------------------------------Validation-------------------------------------
    var valid = true;
    valid &= kiemTraDuLieu.KiemTraRong(nhanVien.maNhanVien, '#error_required_maNhanVien', 'Mã nhân viên') & kiemTraDuLieu.KiemTraRong(nhanVien.tenNhanVien, '#error_required_tenNhanVien', 'Tên nhân viên') & kiemTraDuLieu.KiemTraRong(nhanVien.luongCoBan, '#error_required_luongCoBan    ', 'Lương cơ bản') & kiemTraDuLieu.KiemTraRong(nhanVien.soGioLamTrongThang, '#error_required_soGioLamTrongThang', 'Số giờ làm');
    if (kiemTraDuLieu.KiemTraRong(nhanVien.maNhanVien, '#error_required_maNhanVien', 'Mã nhân viên') === true) {
        valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.maNhanVien, '#error_all_digi_maNhanVien', 'Mã nhân Viên');
        if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.maNhanVien, '#error_all_digi_maNhanVien', 'Mã nhân Viên') === true) {
            valid &= kiemTraDuLieu.kiemTraDoDai(nhanVien.maNhanVien, '#error_maxLenght_maNhanVien', 4, 6, 'Mã nhân viên');
            if(kiemTraDuLieu.kiemTraDoDai(nhanVien.maNhanVien, '#error_maxLenght_maNhanVien', 4, 6, 'Mã nhân viên') === true){
                valid &= kiemTraDuLieu.kiemTraTrungID(nhanVien.maNhanVien, '#error_ID', checkid, 'Mã nhân viên');
            }
        }
    }

    if (kiemTraDuLieu.KiemTraRong(nhanVien.tenNhanVien, '#error_required_tenNhanVien', 'Tên nhân viên') === true) {
        valid &= kiemTraDuLieu.kiemTraTatCaKyTu(nhanVien.tenNhanVien, '#error_allLetter_tenNhanVien', 'Tên nhân viên');
    }

    if (kiemTraDuLieu.KiemTraRong(nhanVien.luongCoBan, '#error_required_luongCoBan', 'Lương cơ bản') === true) {
        valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.luongCoBan, '#error_all_digi_luongCoBan', 'Lương cơ bản');
        if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.luongCoBan, '#error_all_digi_luongCoBan', 'Lương cơ bản') === true) {
            valid &= kiemTraDuLieu.kiemTraGiaTri(nhanVien.luongCoBan, '#error_min_max_length_luongCoBan', 1000000, 20000000, 'Lương cơ bản', 'đồng');
        }
    }

    if (kiemTraDuLieu.KiemTraRong(nhanVien.soGioLamTrongThang, '#error_required_soGioLamTrongThang', 'Số giờ làm') === true) {
        valid &= kiemTraDuLieu.kiemTraTatCaSo(nhanVien.soGioLamTrongThang, '#error_all_digi_soGioLamTrongThang', 'Số giờ làm trong tháng');
        if (kiemTraDuLieu.kiemTraTatCaSo(nhanVien.soGioLamTrongThang, '#error_all_digi_soGioLamTrongThang', 'Số giờ làm trong tháng') === true) {
            valid &= kiemTraDuLieu.kiemTraGiaTri(nhanVien.soGioLamTrongThang, '#error_min_max_length_soGioLamTrongThang', 50, 150, 'Số giờ làm trong tháng', 'giờ');
        }
    }


    if (!valid) {
        return;
    } else {
        console.log('oke');
        axios({
            url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
            method: 'POST',
            data: nhanVien
        })

        // console.log(data);
        .then(function (result) {
            console.log(result.data);
            getNhanVienAPI();
        })
        .catch(function (error) {
            console.log('error', error.reponse.data);
        });
    }

}

function xoaNhanVien(maNhanVienClick) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVienClick}`,
        method: 'DELETE'
    })

    promise.then(function (result) {
        console.log('result', result.data);
        //Xoá thành công load lại table
        getNhanVienAPI();
    });

    promise.catch(function (error) {
        console.log('error', error.response.data);
    })
}

function NhanVien (ma,ten,chuc,hesochuc,luongcb,sogio) {
    this.maNhanVien = ma;
    this.tenNhanVien = ten;
    this.chucVu = chuc;
    this.heSoChucVu = hesochuc;
    this.luongCoBan = luongcb;
    this.soGioLamTrongThang = sogio;
    this.tongLuong = function () {
        var tong = Number(this.heSoChucVu) * Number(this.luongCoBan);
        return tong;
    }
    this.xepLoai = function () {
        var loai = 'nhân viên kém';
        var sogio = Number(this.soGioLamTrongThang);
        if(sogio < 80){
            loai = 'nhân viên kém'
        }else if( sogio < 100){
            loai = 'nhân viên bình thường'
        }else if(sogio <120){
            loai = 'nhân viên giỏi'
        }else if(sogio <= 150){
            loai = 'nhân viên xuất sắc'
        }
        return loai;
    }
}
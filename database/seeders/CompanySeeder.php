<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        
        if (Company::count() !== 0) {
            return;
        }
        $data = [
            [
                'company_name' => 'CÔNG TY CỔ PHẦN THẺ DU LỊCH CRYSTAL BAY',
                'company_link' => 'https://crystalbay.com/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0109664087',
            ],
            [
                'company_name' => 'Sun* Inc. (Sun Asterisk Inc.)',
                'company_link' => 'https://sun-asterisk.vn',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0106045931',
            ],
            [
                'company_name' => 'Công ty Cổ phần MISA',
                'company_link' => 'https://www.misa.vn/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0101243150',
            ],
            [
                'company_name' => 'GOT IT',
                'company_link' => 'https://www.gotit.vn/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '3702672960',
            ],
            [
                'company_name' => 'Tổ chức Giáo dục và Đào tạo Apollo Việt Nam',
                'company_link' => 'http://apollo.edu.vn/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0100774857',
            ],
            [
                'company_name' => 'Công ty TNHH AEON Việt Nam',
                'company_link' => 'https://www.aeon.com.vn/tuyen-dung/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0311241512',
            ],
            [
                'company_name' => 'OpenCommerce Group',
                'company_link' => 'https://medium.com/open-commerce-group',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0109903994',
            ],
            [
                'company_name' => 'CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN LOTTE VIỆT NAM',
                'company_link' => 'https://www.lottefinance.vn/web/company/lotteVietnam?csrt=4849464169283053656',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0304741634008',
            ],
            [
                'company_name' => 'FPT Software',
                'company_link' => 'https://www.fpt-software.com/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0101601092',
            ],
            [
                'company_name' => 'Công ty Cổ phần VNEXT SOFTWARE',
                'company_link' => 'http://vnext.vn/vn/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0108585266',
            ],
            [
                'company_name' => 'Công ty TNHH CJ CGV Việt Nam',
                'company_link' => 'https://www.cgv.vn/vn/about-cgv/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0303675393-001',
            ],
            [
                'company_name' => 'Tổ chức Giáo dục quốc tế Langmaster',
                'company_link' => 'http://www.langmaster.edu.vn/',
                'email' => Str::random(5).'@gmail.com',
                'tax_code' => '0105560993',
            ],
        ];
        foreach ($data as $item) {
            $company = Company::create($item);
        }
    }
}

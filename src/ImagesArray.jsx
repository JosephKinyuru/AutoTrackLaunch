let carArray = [
    "https://media.ed.edmunds-media.com/buick/enclave/2022/oem/2022_buick_enclave_4dr-suv_avenir_fq_oem_1_600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmnXU7C7k1Wg4p8Ql42sf0rVe3jfsp_X3sJYNH1dM2Q&s",
    "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/m2ahc1pzcdc8gbsrnsdt",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cZHubz2uGoKLeFe1Au-WIbsaPRPXGvTmr4eLViaP&s",
    "https://hips.hearstapps.com/hmg-prod/images/2022-volvo-xc60-t8-e-awd-polestar-490-1654263965.jpg?crop=0.573xw:0.641xh;0.151xw,0.359xh&resize=640:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6cAXmwHQuqSPT266o94yRdQFT2QJsOaYiGWbsL-lyJGzWbDrFrJPZgrHuQrJqCAxnDQ&usqp=CAU",
    "https://media.ed.edmunds-media.com/gmc/sierra-1500-limited/2022/oem/2022_gmc_sierra-1500-limited_crew-cab-pickup_at4_fq_oem_1_600.jpg",
    "https://media.ed.edmunds-media.com/gmc/canyon/2017/oem/2017_gmc_canyon_crew-cab-pickup_denali_fq_oem_1_600.jpg",
    "https://media.ed.edmunds-media.com/subaru/outback/2022/oem/2022_subaru_outback_4dr-suv_wilderness_fq_oem_1_600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsdT6p5AaLNGIPe_E0LYoySqRqwcPtxWMBSegMAnW&s",
    "https://www.cars.com/i/large/in/v2/stock_photos/7f2fa193-6cd0-4459-8603-02e00a3f9357/705230a9-4c1c-4664-a1e6-c39e5fa086ad.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi2ZVtvgzyj7__L49hPtjg-_NoCmkkjuBoG1OtFbfug&s",
    "https://www.cnet.com/a/img/resize/5ca0202a0dbf516b48a775dae4a940d7d6631f07/hub/2022/10/25/d7877a73-eae0-4ede-8d28-0bcab16a5620/2023-honda-civic-type-r-promo.jpg?auto=webp&width=1920",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/dp/albums/album-684/lg/Subaru-Outback-3.6R-1_.jpg",
    "https://media.ed.edmunds-media.com/lincoln/navigator-l/2009/oem/2009_lincoln_navigator-l_4dr-suv_base_fq_oem_1_500.jpg",
    "https://media.ed.edmunds-media.com/gmc/yukon-xl/2021/oem/2021_gmc_yukon-xl_4dr-suv_denali_fq_oem_1_1600.jpg",
    "https://i.ytimg.com/vi/dIqS-SeTs74/sddefault.jpg",
    "https://www.topgear.com/sites/default/files/2022/11/1-BMW-i7-7-Series-review.jpg",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q2/667349/2016-dodge-grand-caravan-review-car-and-driver-photo-669240-s-original.jpg?fill=16:9&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHmbgtTnc7BkEc34HHaPERhmR1Kc6TDuaUqOX0Nmk&s",
    "https://media.ed.edmunds-media.com/nissan/frontier/2016/oem/2016_nissan_frontier_extended-cab-pickup_pro-4x_fq_oem_1_600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPRA_n4nzOeMdiKovrIP4JcrCr8NOLvhtWNOeDrgC&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lFbbhPDZTmWw2N8FG_nL_UmdEyFj6K5e7A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKq732hyoo2G5jdao5_clO1XbcDm3X6z_YQ&usqp=CAU",
    "https://image.hmn.com/0BTiSjCuIpYCcAII7JZMK8E9ehs=/820x545/uimage/126636347.jpg",
    "https://cdn.carbuzz.com/gallery-images/1600/588000/500/588529.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2020-chevrolet-sonic-mmp-1-1573491922.jpg?crop=0.952xw:0.853xh;0,0.103xh&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYwMAYT6CZt4PS2oLMiHiYia0ddYoV7wKrOftiIuZ02GiLGA1NqxOp-7L06N4PMSfNV0&usqp=CAU",
    "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/K1wkGmGz-N2ATLkWtqd.jpg?t=165764890683",
    "https://classicsworld.co.uk/wp-content/uploads/sites/6/Jaguar-X-Type-4.jpg?w=900",
    "https://media.ed.edmunds-media.com/mercedes-benz/sl-class/2014/oem/2014_mercedes-benz_sl-class_convertible_sl550_fq_oem_1_1600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLheQsYGyo_CVJR6uy5Ta3mJ7p59i5GA7lw&usqp=CAU",
    "https://media.ed.edmunds-media.com/gmc/sierra-2500hd/2012/oem/2012_gmc_sierra-2500hd_crew-cab-pickup_denali_fq_oem_1_1600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpWqoDNXta_jF1sqi92WSfiIykhIRkn6fWqqPpXqoB7VhhJi4VRLO-luEDh2tCgpSXC4&usqp=CAU",
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/aston-martin-dbs-770-review-2023-01-cornering-front.jpg",
    "https://bringatrailer.com/wp-content/uploads/2023/02/1989_chevrolet_beretta_18d8be85-91cd-4bad-99f2-0931c3522fe1-57221.jpeg",
    "https://www.telegraph.co.uk/content/dam/cars/2022/09/07/TELEMMGLPICT000308270066_trans_NvBQzQNjv4BqDhV2K8uQsCbKQWf5axWl7oBj75DBKCPNxMKpPUzduMI.jpeg",
    "https://www.motortrend.com/uploads/sites/11/2012/06/Pontiac-Firebird-Trans-Am-SD-455-front-three-quarter1.jpg?fit=around%7C875:492",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/2010-2012_Cadillac_SRX_--_05-23-2012.JPG",
    "https://www.edmunds.com/assets/m/ford/econoline-cargo/2005/oem/2005_ford_econoline-cargo_cargo-van_e-350-super-duty_fq_oem_1_500.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2022-nissan-frontier-pro-4x-107-1634854827.jpg?crop=0.469xw:0.352xh;0.215xw,0.443xh&resize=1200:*",
    "https://media.ed.edmunds-media.com/ford/econoline-cargo/2007/oem/2007_ford_econoline-cargo_cargo-van_e-150_fq_oem_2_1600.jpg",
    "https://media.ed.edmunds-media.com/ford/escape/2023/oem/2023_ford_escape_4dr-suv_plug-in-hybrid_fq_oem_1_1280.jpg",
    "https://images.ctfassets.net/c9t6u0qhbv9e/2019VolkswagenGolfSportWagenTestDriveReviewsummary/ed3ada1b0f62d0065097fd2c4b3bd181/2019_Volkswagen_Golf_SportWagen_Test_Drive_Review_summaryImage.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgyC7SlOj2G76a1-BXae4AB6nUrhx6IINlFNDF9XjuJUqtBOmJClIx-zIuYn4UoFGuJQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFm7NFN0hhsOrpFW6M-6U9a0FeNDTBgS7JmjHeCSB55i9xom06Fz-pmzHkqvtwtSf3FQ&usqp=CAU",
    "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/v1/c59caa92be108d29443a9f558f263f55",
    "https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1618417016557-N5YNTVKC2K0XW8XYMCP9/art-mg-lamborghinimurcielago2.jpg",
    "https://images.prismic.io/carwow/078584b1-ecfc-42d7-99a9-8dc93905780c_Kia+Rio+Front+%C2%BE+moving.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format",
    "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/cars/audi/a5/audi--a5-sportback--2021/audi--a5-sportback--2021-m-1.jpg"
];

export default carArray;
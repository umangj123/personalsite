// import React from 'react';
// import './photography.css';

// const photos = [
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczPMUtcsSSzdMYDOnbLEWTp2wZs8gyrMp9k0oBDwHT8KsQBtgB3eiWINod0UMFFbaAir8CFsYgGt-3sQp5smnJjy3Oq7g0TG0Z9KpXDoaVRXxLM_QLN8s2aRQGf_oJkc2Nbo1NQcIKj2jQWSz82u6VBr-w=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 1' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczPUSKvrWe-54SUXRwqCyv3hAeE_-mHD-4llxWN5K6Zl37g_7c3d_SIchYI_ZtyDNWD2z0eRNNCMFiQgbpsaeuzYbqTij_U9WJhdtRCZACtWa-mORAJ7z0i3IAJUqfxmJOsBbqAlblTJJYK5qEPV4is_dw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 2' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczPu8ApGjgtIKOvgJ69caEmenFUEA9TdGCXGlVhy2M41Jjeuq3I2SrH3Z_MBU6NpgDuSfG7HnTj2v5qU96RYGw26RIaiTgpmp_IyYujPa71jkeMXRqZweag_1W-gymhNy0LfdKw1_YSrhbQJwrD4ZsoS4Q=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 3' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczMpQq2lf3ItOOdO9vmB6k15RjIXj-vM7-Liym_CUAGzISQP0OnI5sFMS24etDM9lrFyZNmWeZawtyf0Vv5gDlrfWZFk9Z0VW5F-UxDQSHGX0hQOfyjpk1Zya2ebK0O-VwFNwI8IJqP-LWxUOAeDQiJDZw=w2574-h1716-s-no-gm?authuser=0', alt: 'Photo 4' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczO7uF7Kx9if5Z3qt06047BNSqWZBb-O7qNoTsU23TVb1JQKSJv2OCeC_smU4ei_yQy_b2sgyV3hpmBPEXSgXsaCeA8XtBlgV_1cnyNxzd1cIKl-6Edd6eVcENg9utyTHjEh3YNYufA7sxJol7IG9YB4uA=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 5' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczOEt-8KgoYda0PGfAPfDGorrBplklF2uAFWEFRGV9vfM6VPqnfhvDcgzb2xyDGnoCuLBz0UZikol1yjhr9LaUU2c0ZLjHUUa6QGF64FEWUpDqGWtxh8fUlEbLsJsz4ECheY0McKaktyV8cIX88ZfIHLEw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 6' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczOva0vaXT0d5f9RTezp36CYD4f4wFasQ5jvolD-gTOimm-DokhcvFHi7lEL-4J8698ZpEeLu7ExeXebsfwUJylsBITD_u1ak3heiOwvtSivGIcdwgobGAPkcm1A9eSQHyqMnrL-_KPT5njc6dAsuNu7wg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 7' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczOvrbyyMpUGn1TZhO5tmY3de_UKyn9pACEDqN_z_ZeSVsLwC4YM4WFeYAa4RqJOkzTnvG6-IBsRBZvxU2JCM6UmoBwt97XC3MQ0V1oV3CF0jCmnozlDvWzbgSgHybtb5Ct9GpUjZYIVIsJE97u4NdSoFg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 8' },
//     { src: 'https://lh3.googleusercontent.com/pw/AP1GczPo3dE6KRJAOsoDwNEVvI-rm_Hu9RKv2-nC2iRaec5yt3r_8Uf9Gfa-LO7lMjfW4RLRCj4vcak4ErqNw-Cw7PmzgdhWK30Z4CssKtdWRNmRayYwf4CTXziF1jQH89MgNgrNsuXuOjRnmxBEoL9wI_ezVA=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 9' },


//     // Add more photos as needed
// ];

// const Photography = () => {
//     return (
//         <div className="photography">
//             <h1>Photography Portfolio</h1>
//             <div className="gallery">
//                 {photos.map((photo, index) => (
//                     <img key={index} src={photo.src} alt={photo.alt} className="gallery-photo" />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Photography;

import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './photography.css';

const photos = [
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNkZKqSLBlJAOLR0tTVA1vT_v9xOxz5X-WMfp7IgO82SBgtquv9qqkmLb_7Z0kde2YExU-qnFUIhAF3sTntaBGTIxxzRgi3wN2i68hBMd_3fkQR5QArGLtTwfhzLB4zjSI950u90AXIqFqPPA-OeWtAEw=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 1' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPMUtcsSSzdMYDOnbLEWTp2wZs8gyrMp9k0oBDwHT8KsQBtgB3eiWINod0UMFFbaAir8CFsYgGt-3sQp5smnJjy3Oq7g0TG0Z9KpXDoaVRXxLM_QLN8s2aRQGf_oJkc2Nbo1NQcIKj2jQWSz82u6VBr-w=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 1' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPUSKvrWe-54SUXRwqCyv3hAeE_-mHD-4llxWN5K6Zl37g_7c3d_SIchYI_ZtyDNWD2z0eRNNCMFiQgbpsaeuzYbqTij_U9WJhdtRCZACtWa-mORAJ7z0i3IAJUqfxmJOsBbqAlblTJJYK5qEPV4is_dw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 2' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPu8ApGjgtIKOvgJ69caEmenFUEA9TdGCXGlVhy2M41Jjeuq3I2SrH3Z_MBU6NpgDuSfG7HnTj2v5qU96RYGw26RIaiTgpmp_IyYujPa71jkeMXRqZweag_1W-gymhNy0LfdKw1_YSrhbQJwrD4ZsoS4Q=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 3' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMpQq2lf3ItOOdO9vmB6k15RjIXj-vM7-Liym_CUAGzISQP0OnI5sFMS24etDM9lrFyZNmWeZawtyf0Vv5gDlrfWZFk9Z0VW5F-UxDQSHGX0hQOfyjpk1Zya2ebK0O-VwFNwI8IJqP-LWxUOAeDQiJDZw=w2574-h1716-s-no-gm?authuser=0', alt: 'Photo 4' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczO7uF7Kx9if5Z3qt06047BNSqWZBb-O7qNoTsU23TVb1JQKSJv2OCeC_smU4ei_yQy_b2sgyV3hpmBPEXSgXsaCeA8XtBlgV_1cnyNxzd1cIKl-6Edd6eVcENg9utyTHjEh3YNYufA7sxJol7IG9YB4uA=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 5' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOEt-8KgoYda0PGfAPfDGorrBplklF2uAFWEFRGV9vfM6VPqnfhvDcgzb2xyDGnoCuLBz0UZikol1yjhr9LaUU2c0ZLjHUUa6QGF64FEWUpDqGWtxh8fUlEbLsJsz4ECheY0McKaktyV8cIX88ZfIHLEw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 6' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOva0vaXT0d5f9RTezp36CYD4f4wFasQ5jvolD-gTOimm-DokhcvFHi7lEL-4J8698ZpEeLu7ExeXebsfwUJylsBITD_u1ak3heiOwvtSivGIcdwgobGAPkcm1A9eSQHyqMnrL-_KPT5njc6dAsuNu7wg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 7' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOvrbyyMpUGn1TZhO5tmY3de_UKyn9pACEDqN_z_ZeSVsLwC4YM4WFeYAa4RqJOkzTnvG6-IBsRBZvxU2JCM6UmoBwt97XC3MQ0V1oV3CF0jCmnozlDvWzbgSgHybtb5Ct9GpUjZYIVIsJE97u4NdSoFg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 8' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPo3dE6KRJAOsoDwNEVvI-rm_Hu9RKv2-nC2iRaec5yt3r_8Uf9Gfa-LO7lMjfW4RLRCj4vcak4ErqNw-Cw7PmzgdhWK30Z4CssKtdWRNmRayYwf4CTXziF1jQH89MgNgrNsuXuOjRnmxBEoL9wI_ezVA=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 9' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOIYnd96udGzSWkkXaX6eCFTpUJrurNFOgSDqo_x9lziSfB3_R2Nv-QzABlMrJ42w_R9rYWvgh4x7OlepGwjjUFES_LqB9bvfxxNUAGDmzBwTXbQBrLNGW6kCiUGY-f-agzyPLnRjXstnVeo6GdPl6B3w=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 10' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMzPhjhcORg2iv3mtSCv8UsgEsf1AlqJW0lPUJ46R7wSeiJGSFpr5yN4yC0jlJkp2QdpLD7x5_yvGCnmT3uP44rc4f6fz0UCHQjwOZULy09KbycEFN2WaTXCHmHm03LNrvSTYvHyhCzithFaeFGX3mb2Q=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 11' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPpmx7u0o-UhOCRsl5L1picW9GhIwD-AVVEAHH7WZgrklRP5xUNxfOfsBSuauWX_b8kSDWxPT989QjVxsiZd0h6Hhz5QnbWtRdmtB7fPa5yj413XifOYx3cdndEhKCuZdFIZKlLzVEhtTgXjhCKs2kIvw=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 12' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczN4zCjTNYconWp050UbNZkraRhT_xe09-UnSuedWFNNOswk9i7AD3OJh1-On16Xjvvs9WHM5N9S3lbn9F-nb4FP3l3Ey6vrzYieWT6jqay9QdjjVrBHVmMz2DmrMj3UGXcTmZV9VqF31x1lBep6OaqylQ=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 13' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPYmjka4-c_HjnwMgcAaEsYZGLbj1E8oc6nXSR8o3X_JYnB3dgEwX5UUvmZxWireyM6OvoTyyIwFYfTnuL2ODa_vaTe9vGPym0u6fX9x2iZeFxyOli1S-1e3va6hmgVPZSFoXzz2FixY7YPgIjcU4nInQ=w2300-h1535-s-no-gm?authuser=0', alt: 'Photo 14' },






    // Add more photos as needed
];

const Photography = () => {
    return (
        <div className="photography">
            <h1>Photography Portfolio 📸</h1>
            <div className="gallery">
                {photos.map((photo, index) => (
                    <Zoom key={index}>
                        <img src={photo.src} alt={photo.alt} className="gallery-photo" />
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default Photography;

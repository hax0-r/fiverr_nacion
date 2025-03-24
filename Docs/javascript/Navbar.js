const navbar = document.getElementById("navbar")

navbar.innerHTML = `

<div class="bg-[#f2f6f9] p-3 lg:block hidden">
<div class="flex items-center justify-between gap-5 flex-wrap max-w-7xl w-full mx-auto">
    <a href="tel:+50677778888" class="flex font-medium tracking-wide text-sm items-center gap-1">
        <i class="fa-brands fa-whatsapp"></i>
        +506-7777-8888
    </a>
    <a href="mailto:info@naciontravel.com"
        class="flex font-medium tracking-wide text-sm items-center gap-1">
        <i class="fa-solid fa-envelope"></i>
        info@naciontravel.com
    </a>
    <a href="" class="flex font-medium tracking-wide text-sm items-center gap-1">
        Facebook
    </a>
    <a href="" class="flex font-medium tracking-wide text-sm items-center gap-1">
        Instagram
    </a>
    <a href="" class="flex font-medium tracking-wide text-sm items-center gap-1">
        TikTok
    </a>
    <select name="" class="border rounded-lg py-1  cursor-pointer" id="">
        <option value="">en</option>
        <option value="">es</option>
        <option value="">fr</option>
    </select>
</div>
</div>

<div style="width: 0%;" id="resNav"
class="fixed transition-all duration-500 overflow-hidden h-screen top-0 left-0 bg-white z-50">
<div class="flex items-center justify-center flex-col">
    <div class="flex p-5 mt-10 items-center justify-between">
        <a href="./index.html">
            <img src="" alt="logo">
        </a>
        <i class="fa-solid cursor-pointer closeNav fa-x text-xl absolute top-8 right-8"></i>
    </div>

    <div
        class="mt-8 text-nowrap px-5 w-full flex flex-col gap-10 items-center text-center justify-between h-[80vh] overflow-auto">
        <ul class="  flex-col gap-8 flex ">
            <li> <a href="./excursions.html"
                    class=" text-nowrap capitalize cursor-pointer transition-all duration-500">
                    excursions</a>
            </li>
            <li> <a href="./about.html"
                    class=" text-nowrap capitalize cursor-pointer transition-all duration-500">
                    about us</a></li>
            <li> <a 
                    class=" closeNav openContactFormBtn text-nowrap capitalize cursor-pointer transition-all duration-500">
                    contact us</a></li>
            <li> <a href="tel:+50677778888"
                    class="flex text-center justify-center font-medium tracking-wide text-sm items-center gap-1">
                    <i class="fa-brands fa-whatsapp"></i>
                    +506-7777-8888
                </a></li>
            <li> <a href="mailto:info@naciontravel.com"
                    class="flex text-center justify-center font-medium tracking-wide text-sm items-center gap-1">
                    <i class="fa-solid fa-envelope"></i>
                    info@naciontravel.com
                </a></li>
            <li> <a href=""
                    class="flex justify-center font-medium tracking-wide text-sm items-center gap-1">
                    Facebook
                </a></li>
            <li> <a href=""
                    class="flex justify-center font-medium tracking-wide text-sm items-center gap-1">
                    Instagram
                </a></li>
            <li> <a href=""
                    class="flex justify-center font-medium tracking-wide text-sm items-center gap-1">
                    TikTok
                </a></li>
            <li>
                <select name="" class="border rounded-lg py-1  cursor-pointer" id="">
                    <option value="">en</option>
                    <option value="">es</option>
                    <option value="">fr</option>
                </select>
            </li>
        </ul>
    </div>

</div>
</div>

<div class="w-full">
<div class="bg-white w-full h-20 flex items-center justify-center">
    <div class="flex items-center justify-between max-w-7xl w-full mx-auto p-5">
        <a href="./index.html">
            <img src="" alt="logo">
        </a>
        <div class="flex items-center gap-3">
            <ul class="hidden items-center justify-center gap-8 lg:flex ">
                <li> <a href="./excursions.html"
                        class=" capitalize magra cursor-pointer transition-all duration-500">
                        excursions</a>
                </li>
                <li> <a href="./about.html"
                        class=" capitalize magra cursor-pointer transition-all duration-500">
                        about us</a></li>
                <li> <a 
                        class="openContactFormBtn capitalize magra cursor-pointer transition-all duration-500">
                        contact us</a></li>
            </ul>
            <div class="lg:hidden">
                <i class="fa-solid fa-bars text-2xl cursor-pointer" id="openNav"></i>
            </div>
        </div>
    </div>
</div>
</div>
`

const closeNav = document.querySelectorAll(".closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})

closeNav.forEach(close => {
    close.addEventListener('click', () => {
        resNav.style.width = "0%"
    })
})

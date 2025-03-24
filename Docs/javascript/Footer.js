const footer = document.getElementById("footer")

footer.innerHTML = `
<footer class="md:mt-20 mt-10 pt-20  bg-white">
            <div class="max-w-7xl w-full mx-auto px-5 ">

                <div class="flex items-center md:justify-between justify-center gap-10 md:flex-row flex-col">
                    <img src="" alt="logo">
                    <p class="text-lg max-w-4xl text-center">From volcanoes and rainforests to pristine beaches, Nacion
                        Travel offers unforgettable adventures in Costa Rica. Contact us today to start planning your
                        dream vacation!</p>
                </div>

                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-16 mt-8 items-end md:gap-14 gap-5">

                    <div class="border p-5 w-full">
                        <h2 class="text-2xl mb-4">Reservations & Offices</h2>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-location-dot text-zinc-300"></i>
                            <p class="text-sm">US. 1332 Colt Creek Place, <br>
                                Wesley Chapel FL 33543</p>
                        </div>
                        <div class="flex items-center gap-3 mt-3">
                            <i class="fa-solid fa-location-dot text-zinc-300"></i>
                            <p class="text-sm">CR. 100 Mts, De Puesto 10, <br>
                                San Rafael, Alajuela 20108</p>
                        </div>
                        <div class="flex items-center gap-3 mt-3">
                            <i class="fa-solid fa-mobile-screen-button text-zinc-300"></i>
                            <a href="tel:+50677778888" class="text-sm">+506-7777-8888</a>
                        </div>
                        <div class="flex items-center gap-3 mt-3">
                            <i class="fa-solid fa-envelope text-zinc-300"></i>
                            <a href="mailto:info@naciontravel.com" class="text-sm">info@naciontravel.com</a>
                        </div>
                    </div>

                    <div class="border p-5 w-full">
                        <h2 class="text-2xl mb-4">Office Hours</h2>
                        <p class="text-sm">Monday to Friday <br>
                            7:00 am to 6:00 pm</p>
                        <p class="text-sm mt-3">Saturday <br>
                            7:00 am to 12:00 noon</p>
                    </div>

                    <div class="border p-5 w-full">
                        <h2 class="text-2xl mb-4">Social</h2>

                        <div class="flex items-center gap-2">

                            <div class="w-10 h-10 border rounded-full flex items-center justify-center">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div class="w-10 h-10 border rounded-full flex items-center justify-center">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div class="w-10 h-10 border rounded-full flex items-center justify-center">
                                <i class="fa-brands fa-tiktok"></i>
                            </div>

                        </div>

                        <button class="w-full p-3 mt-5 rounded-full cursor-pointer border">Tag us in your
                            photos!</button>

                    </div>

                </div>

                <p class="text-center p-5 ">Nacion Travel 2025 All Rights Reserved </p>

            </div>
        </footer>
`
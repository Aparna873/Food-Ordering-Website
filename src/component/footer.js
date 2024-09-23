import React from "react";
import Logo from '../images/logo.png'
import "./footer.css"
export const Footer=()=>{
    return(
        <div>
            

<footer class="bg-white">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src={Logo} class="h-8 me-3" alt="Foodie Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">TastyHub</span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Menu</h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="/menu" class="hover:underline">All Items</a>
            </li>
            <li>
              <a href="/offers" class="hover:underline">Special Offers</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="https://github.com/your-repo" class="hover:underline">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/your-account" class="hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
          <ul class="text-gray-500 font-medium">
            <li class="mb-4">
              <a href="/privacy" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center">© 2024 Food™. All Rights Reserved.</span>
      <div class="flex mt-4 sm:justify-center sm:mt-0">
        <a href="#" class="text-gray-500 hover:text-gray-900">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    
            <path d="..." />
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
          
            <path d="..." />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>


        </div>
    )
}
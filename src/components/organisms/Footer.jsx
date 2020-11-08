import React from "react";

// FontAwesome
<script
src="https://kit.fontawesome.com/86134dd369.js"
crossorigin="anonymous"></script>



export default function Footer() {
    return (
        <footer>
           <hr/>

<ul class="contact-list">

            <li>
                <a href="https://www.instagram.com/abc.parcels/"> 
                    <i class="fab fa-instagram"></i>
                    Instagram : abc.parcels</a>
            </li>
            <li>
                <a href="https://www.facebook.com/abcparcels/">
                <i class="fab fa-facebook"></i>
                Facebook : abcparcels </a>
            </li>
            <li>
                <a href="mailto:abcparcels@gmail.com">
                    <i class="fas fa-envelope-open"></i>
                    abcparcels@gmail.com
                </a>
            </li>
            
        </ul>    </footer>
    );
}
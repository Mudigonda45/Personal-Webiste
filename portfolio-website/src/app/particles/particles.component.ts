import { Component, AfterViewInit } from '@angular/core';
//import particlesJS from 'particles.js'; // Import particles.js

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize particles.js with the configuration
    //particlesJS.load('particles-js', 'assets/particles.json', () => {
      console.log('Particles.js config loaded successfully');
 //   });
  }
}

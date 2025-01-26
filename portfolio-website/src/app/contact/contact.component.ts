/* import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule  } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[CommonModule,FormsModule]
})
export class ContactComponent {
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);
      alert('Your message has been sent!');
      contactForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,FormsModule],
  template: `
    <div class="contact-container">
      <!-- Contact Information Section -->
      <div class="contact-info">
        <h2>Contact Info</h2>
        <p>
          Always available for freelance work if the right project comes along. Feel free to contact me!
        </p>
        <h4>Address</h4>
        <p>Bhadrachalam, Bhadradri Kothagudem, 507111</p>

        <h4>Phone</h4>
        <p>+91 7013016332</p>

        <h4>Email</h4>
        <p>mudigondamohansai.com</p>

        <h4>Location</h4>
        <iframe
          src="YOUR_GOOGLE_MAPS_EMBED_LINK"
          width="100%"
          height="200"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <!-- Message Me Form Section -->
      <div class="message-me">
        <h2>Message Me</h2>
        <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ngModel
              required
              placeholder="Your Full Name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              ngModel
              required
              placeholder="Your Email"
            />
          </div>

          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              ngModel
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
    .contact-container {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      max-width: 1200px;
      margin: auto;
      font-family: Arial, sans-serif;
    }

    .contact-info {
      width: 40%;
      padding: 10px;
    }

    .contact-info h2, .message-me h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .contact-info p {
      margin: 5px 0;
    }

    .message-me {
      width: 50%;
      padding: 10px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
    `,
  ],
})
export class ContactComponent {
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }
}

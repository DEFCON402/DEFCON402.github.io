---
title: "Contact Us"
layout: page
path: "/contact/"
iconType: "CONTACTUS"
priority: 1
hide: true
---

<form>
  <div class="form-group">
    <label for="name">Your Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Name">
  </div>
  <div class="form-group">
    <label for="email">Your Email Address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label for="inquiry-type">Inquiry Type</label>
      <select id="inquiry-type" class="form-control">
        <option selected>General</option>
        <option>Slack Invite</option>
        <option>Sponsorship</option>
        <option>Presentations</option>
        <option>Report an Incident</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="message">Your Message</label>
    <textarea type="text" class="form-control" rows="5" id="message" placeholder="Message" resizeable></textarea> 
  </div>
  <div class="form-group">
    <label for="captcha">Captcha?</label>
    <input type="text" class="form-control" id="captcha" placeholder="Possible Captcha">
  </div>
  <button id="contact_form_btn" type="submit" class="btn btn-primary">Submit</button>
</form>

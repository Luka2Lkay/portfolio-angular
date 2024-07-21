import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{


  contactForm: FormGroup = new FormGroup({
    email : new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })

  ngOnInit(): void {
    console.log(environment.SMTP_SERVER)
  }

  submit(): void {
    console.log(this.contactForm.value)
  }

}

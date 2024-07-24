import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private _emailService: EmailService) {}

  contactForm: FormGroup = new FormGroup({
    senderName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    ]),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  toaster: boolean = false;

  ngOnInit(): void {}

  submit(): void {
    this._emailService.sendEmail(this.contactForm.value).subscribe({
      next: () => {
        this.toaster = true;
        setTimeout(() => {
          this.toaster = false;
        }, 2000);
        this.contactForm.reset();
      },
      error: console.log,
    });
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private firestore: AngularFirestore) { }
  capturedImageData: string | null = null;
  async captureImage(): Promise<void> {
    try {
      const imageData = await captureImageFunction();
      this.capturedImageData = imageData;

      // Push the captured image data to Firestore
      this.firestore.collection('images').add({ data: imageData, type: 'image' })
        .then(() => console.log('Image captured and pushed to Firestore'))
        .catch(error => console.error('Error capturing image:', error));
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  captureFingerprint(): void {
    // Assume you have a function to capture a fingerprint
    const fingerprintData = captureFingerprintFunction(); // Replace with your actual implementation

    // Push the captured fingerprint data to Firestore
    this.firestore.collection('fingerprints').add({ data: fingerprintData, type: 'fingerprint' })
      .then(() => console.log('Fingerprint captured and pushed to Firestore'))
      .catch(error => console.error('Error capturing fingerprint:', error));
  }
}  

async function captureImageFunction(): Promise<string> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    const video = document.createElement('video');
    video.srcObject = stream;

    await new Promise((resolve) => {
      video.onloadedmetadata = resolve;
      video.play();
    });

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Canvas context is null or undefined.');
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    stream.getTracks().forEach(track => track.stop());

    return imageDataURL;
  } catch (error) {
    console.error('Error capturing image:', error);
    throw error;
  }
}

function captureFingerprintFunction(): Promise<string> {
  // Placeholder function, replace with your actual fingerprint capture logic
  return new Promise((resolve, reject) => {
    try {
      // Implement your fingerprint capture logic here
      const fingerprintData = 'PlaceholderFingerprintData';
      resolve(fingerprintData);
    } catch (error) {
      console.error('Error capturing fingerprint:', error);
      reject(error);
    }
  });
}



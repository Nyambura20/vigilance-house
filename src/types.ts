/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'client' | 'worker' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  location?: string;
  idNumber?: string;
  kids?: number;
  language?: string;
  status?: 'active' | 'pending' | 'suspended';
  profilePicture?: string;
}

export interface WorkerProfile {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  skills: string[];
  image: string;
  location: string;
  price: {
    daily: string;
    weekly: string;
    monthly: string;
  };
  bio: string;
  availability: string;
  experience: string;
  education?: string;
  contact?: string;
  idPhotos?: string[];
  cv?: string;
  certifications?: string[];
  portfolio?: string;
}

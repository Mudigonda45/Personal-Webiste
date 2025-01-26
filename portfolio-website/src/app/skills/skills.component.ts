import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', percentage: 85 },
    { name: 'Java Spring Boot', percentage: 85 },
    { name: 'SQL', percentage: 80 },
    { name: 'Git', percentage: 90 }
  ];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ParticlesComponent } from './particles/particles.component';

export const routes: Routes = [

  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', redirectTo: '/about-me', pathMatch: 'full',component:ParticlesComponent }, // Redirect to About Me by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

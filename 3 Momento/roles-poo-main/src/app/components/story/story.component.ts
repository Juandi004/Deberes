import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  standalone: true,
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @Input() majorName!: string;
  @Input() major2Name!: string;
  @Input() villagerName!: string;
  @Input() villager2Name!: string;
  @Input () superheroName!: string;
  @Input () superhero2Name!: string;
  @Input () monsterName!: string;
  @Input () monster2Name!: string;
  @Input () soldierName!: string;
  @Input () soldier2Name!: string;
  @Input () policemanName!: string;
  @Input () policeman2Name!: string;
  @Input () farmerName!: string;
  @Input () farmer2Name!: string;
}

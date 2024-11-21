import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Project 78',
      summary: 'Project 78 is a first-person shooter and survival game developed with Unity and C#. It places the player in the role of our protagonist, known as "Subject 78." The story unfolds in a world affected by the outbreak of an unknown, highly contagious virus...',
      description: ' Project 78 is a first-person shooter and survival game developed with Unity and C#, with GitHub used for version control. It places the player in the role of our protagonist, known as "Subject 78." The story unfolds in a world affected by the outbreak of an unknown, highly contagious virus. As the player progresses, they will uncover secrets behind this story by finding documents and notes scattered throughout the environment.',
      projectLink: 'https://github.com/armadillo554/Digital_Legends',
      pictures: ["../../assets/project78.png"]
    },
    {
      id: 2,
      name: 'Unearth The Unknown',
      summary: 'Unearth The Unknown is a horror-mystery video game developed in Unity with C# as part of a six-day game jam.This project blends suspense and intrigue, offering players a chilling experience as they explore eerie environments and uncover hidden secrets.',
      description: ' Unearth The Unknown is a horror-mystery video game developed in Unity with C# over a six-day game jam, created in collaboration with university classmates and a 3D modeler. The story follows a protagonist who arrives in a haunting town to meet his friends at the cemetery. After a strange incident where he falls into an open grave, he wakes up back at the train station as if nothing happened. Confused and determined to find his friends, he returns to the cemetery only to find it deserted and filled with an oppressive atmosphere.The game invites players to explore the lurking mystery and terror, confronting the blurred lines between reality and illusion as they search for clues to uncover the fate of the protagonist’s friends',
      projectLink: 'https://itch.io/jam/beginners-jam-halloween-2024/rate/3075602',
      pictures: ["../../assets/utu1.png", "../../assets/UTU2.png", "../../assets/CodeUTU1.png"]
    }
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Dnavarro | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}

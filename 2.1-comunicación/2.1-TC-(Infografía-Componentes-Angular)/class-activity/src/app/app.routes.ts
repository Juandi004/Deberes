import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PaceComponent } from './pages/pace/pace.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'pace', component: PaceComponent },

];

export default routes;

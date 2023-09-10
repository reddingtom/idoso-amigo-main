import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'php',
    loadChildren: () => import('./test/php/php.module').then( m => m.PhpPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'cep',
    loadChildren: () => import('./pages/cep/cep.module').then( m => m.CepPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'iam',
    loadChildren: () => import('./pages/iam/iam.module').then( m => m.IamPageModule)
  },  {
    path: 'registeridoso',
    loadChildren: () => import('./pages/registeridoso/registeridoso.module').then( m => m.RegisteridosoPageModule)
  },
  {
    path: 'registercuidador',
    loadChildren: () => import('./pages/registercuidador/registercuidador.module').then( m => m.RegistercuidadorPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'detalhechat',
    loadChildren: () => import('./pages/detalhechat/detalhechat.module').then( m => m.DetalhechatPageModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./pages/contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'contactar',
    loadChildren: () => import('./pages/contactar/contactar.module').then( m => m.ContactarPageModule)
  },
  {
    path: 'contactar2',
    loadChildren: () => import('./pages/contactar2/contactar2.module').then( m => m.Contactar2PageModule)
  },
  {
    path: 'lembrete',
    loadChildren: () => import('./pages/lembrete/lembrete.module').then( m => m.LembretePageModule)
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

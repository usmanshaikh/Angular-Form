import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "template-driven-form",
    component: TemplateDrivenFormComponent,
    pathMatch: "full"
  },
  {
    path: "reactive-form",
    component: ReactiveFormComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

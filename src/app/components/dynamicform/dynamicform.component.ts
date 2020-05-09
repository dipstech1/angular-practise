import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {

  myFormGroup:FormGroup;

  form_template = [
    {
      "type":"textBox",
      "label":"Name",
    },
    {
      "type":"number",
      "label":"Age"
    },
    {
      "type":"select",
      "label":"favorite book",
      "options":["Jane Eyre","Pride and Prejudice","Wuthering Heights"]
    }
  ]

  constructor() { }

  ngOnInit() {
    this.myFormGroup = this.createDynamicForm(this.form_template);
    console.log(this.myFormGroup)
  }


  createDynamicForm(descriptor = []) : FormGroup {
    const tst : FormGroup | any = {}
    console.log(descriptor)
    descriptor.forEach(control => {
      tst[control.label] = new FormControl('')
    });
    return new FormGroup(tst)
  }

}

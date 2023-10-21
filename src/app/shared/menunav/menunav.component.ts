import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
	selector: 'app-menunav',
	templateUrl: './menunav.component.html',
	styleUrls: ['./menunav.component.css']
})
export class MenunavComponent implements OnInit {

	ngOnInit(): void {
		initFlowbite();
	}
}

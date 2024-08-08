import { Component, EventEmitter, OnChanges, OnInit, Output, output } from '@angular/core';
import { IconModule } from '../../icons/icon.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPage } from '../views/searchpage/searchpage.component';
import { ProgramCardComponent } from './program-card/program-card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgramsService } from './program.service';

interface Program {
  institution: string;
  country: string;
  counticon: string;
  langicon: string;
  title: string;
  mode: string;
  startDate: Date;
  languages: string[];
  type: string;
  level: string;
  duration: number;
  tuitionFee: number;
  image: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [IconModule, CommonModule,FormsModule,ReactiveFormsModule,ProgramCardComponent,PaginatorComponent],
  templateUrl: './programs.component.html',
})
export class ProgramsComponent implements OnInit {

  programs: Program[] = [];
  filteredPrograms: Program[] = [];
  paginatedPrograms: Program[] = [];
  itemsPerPage: number = 12;
  currentPage: number = 1;
  searchForm: FormGroup;

  constructor(private programsService: ProgramsService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.programs = this.programsService.getPrograms();
    this.filteredPrograms = [...this.programs];
    this.searchForm.get('search')?.valueChanges.subscribe(value => {
      this.filterPrograms(value);
    });
    this.updatePaginatedPrograms();

  }

  filterPrograms(query: string): void {
    if (query) {
      this.filteredPrograms = this.programs.filter(program =>
        program.title.toLowerCase().includes(query.toLowerCase()) ||
        program.institution.toLowerCase().includes(query.toLowerCase()) ||
        program.mode.toLowerCase().includes(query.toLowerCase()) ||
        program.type.toLowerCase().includes(query.toLowerCase()) ||
        program.level.toLowerCase().includes(query.toLowerCase()) ||
        program.country.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredPrograms = [...this.programs];
    }

    this.currentPage = 1;
    this.updatePaginatedPrograms();
  }


  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedPrograms();
  }

  updatePaginatedPrograms() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPrograms = this.filteredPrograms.slice(startIndex, endIndex);
    console.log('Paginated programs:', this.paginatedPrograms);
  }


}

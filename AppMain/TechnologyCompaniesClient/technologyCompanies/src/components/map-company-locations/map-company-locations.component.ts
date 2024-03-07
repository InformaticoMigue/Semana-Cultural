import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet'
import { MapService } from '../../service/map/map.service';
import { Company, Location } from '../../assets/types/types';

@Component({
  selector: 'app-map-company-locations',
  standalone: true,
  imports: [],
  templateUrl: './map-company-locations.component.html',
  styleUrl: './map-company-locations.component.css'
})
export class MapCompanyLocationsComponent implements OnChanges {
  @Input()
  locations!: Location[];
  private mapService: MapService = inject(MapService);
  private map!: Map;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = new Map('map', {
      maxBounds: [[89.9, -180], [-89.9, 180]]
    }).setView([40, -60], 3)
    tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.updateLocations(this.map, changes['locations'].currentValue)

  }

  updateLocations(map: Map, locations: Location[]): void {
    for (const location of locations) {
      this.mapService.getCoordsByCountry(location.country).subscribe(coords => {
        marker([coords[1], coords[0]]).bindTooltip(
          `
          <div class="flex flex-col gap-3">
            <p>Direccion: ${location.address}</p>
            <p>Codigo postal: ${location.postalCode}</p>
          </div>
          
          `).addTo(map)
          console.log(coords[0], coords[1], location.country);
          
      })
    }
  }
}

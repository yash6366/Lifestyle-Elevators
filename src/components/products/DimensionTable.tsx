import React from 'react';
import {
  PASSENGER_MEASUREMENTS,
  HOSPITAL_MEASUREMENTS,
  GOODS_MEASUREMENTS,
  PIT_OVERHEAD_DIMENSIONS,
} from '@/data/products';
import { AlertCircle, FileCheck } from 'lucide-react';

export function DimensionTable() {
  return (
    <div id="brochure-dimensions" className="scroll-mt-24 space-y-12">
      {/* Verification Disclaimer as per PRD §6 */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <p className="leading-relaxed">
          <strong className="font-semibold">Planning Reference Note:</strong> The dimensional data
          below is reproduced directly from Page 8 of the Lifestyle Elevators official technical
          brochure. Hoistway requirements, pit depths, and entrance openings vary based on
          architectural blueprints and site constraints. Final civil shaft dimensions must be
          confirmed with our engineering desk prior to site execution.
        </p>
      </div>

      {/* 1. Passenger Elevators Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-brand-gold-600" />
          <h3 className="text-lg font-bold text-brand-blue-900">
            Passenger Elevators Standard Dimensions
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-brand-blue-950 font-semibold text-white">
              <tr>
                <th
                  colSpan={2}
                  className="border-r border-brand-blue-900 bg-brand-blue-900 px-4 py-2.5 text-center"
                >
                  Rated Load
                </th>
                <th colSpan={2} className="border-r border-brand-blue-900 px-4 py-2.5 text-center">
                  Lift Well (Hoistway) mm
                </th>
                <th
                  colSpan={2}
                  className="border-r border-brand-blue-900 bg-brand-blue-900 px-4 py-2.5 text-center"
                >
                  Clear Cabin mm
                </th>
                <th className="px-4 py-2.5 text-center">Entrance Opening</th>
              </tr>
              <tr className="border-t border-brand-blue-900 text-xs text-brand-gold-300">
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Persons</th>
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Kg</th>
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Width (W)</th>
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Depth (D)</th>
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Width (W)</th>
                <th className="border-r border-brand-blue-900 px-3 py-2 text-center">Depth (D)</th>
                <th className="px-3 py-2 text-center">Width (E) mm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              {PASSENGER_MEASUREMENTS.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                  <td className="px-3 py-2.5 text-center font-semibold text-slate-800">
                    {row.capacityPersons}
                  </td>
                  <td className="px-3 py-2.5 text-center text-slate-700">{row.capacityKg} kg</td>
                  <td className="px-3 py-2.5 text-center text-slate-600">{row.liftWellWidth}</td>
                  <td className="px-3 py-2.5 text-center text-slate-600">{row.liftWellDepth}</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-slate-600">
                    {row.cabinWidth}
                  </td>
                  <td className="px-3 py-2.5 text-center font-semibold text-slate-600">
                    {row.cabinDepth}
                  </td>
                  <td className="px-3 py-2.5 text-center font-bold text-brand-blue-900">
                    {row.entranceOpening}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Hospital & Goods Dual Table Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Hospital Lifts */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-base font-bold text-brand-blue-900">
            <span>Hospital Stretcher Elevators</span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-blue-950 font-semibold text-white">
                <tr>
                  <th className="px-3 py-2 text-center">Persons / Kg</th>
                  <th className="px-3 py-2 text-center">Lift Well (W × D)</th>
                  <th className="px-3 py-2 text-center">Clear Cabin (W × D)</th>
                  <th className="px-3 py-2 text-center">Entrance (E)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {HOSPITAL_MEASUREMENTS.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="px-3 py-2 text-center font-semibold text-slate-800">
                      {row.capacityPersons} P / {row.capacityKg} kg
                    </td>
                    <td className="px-3 py-2 text-center text-slate-600">
                      {row.liftWellWidth} × {row.liftWellDepth} mm
                    </td>
                    <td className="px-3 py-2 text-center font-semibold text-slate-600">
                      {row.cabinWidth} × {row.cabinDepth} mm
                    </td>
                    <td className="px-3 py-2 text-center font-bold text-brand-blue-900">
                      {row.entranceOpening} mm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Goods Lifts */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-base font-bold text-brand-blue-900">
            <span>Goods & Freight Elevators</span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-blue-950 font-semibold text-white">
                <tr>
                  <th className="px-3 py-2 text-center">Rated Load (Kg)</th>
                  <th className="px-3 py-2 text-center">Lift Well (W × D)</th>
                  <th className="px-3 py-2 text-center">Clear Cabin (W × D)</th>
                  <th className="px-3 py-2 text-center">Entrance (E)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {GOODS_MEASUREMENTS.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="px-3 py-2 text-center font-bold text-brand-blue-900">
                      {row.capacityKg} kg
                    </td>
                    <td className="px-3 py-2 text-center text-slate-600">
                      {row.liftWellWidth} × {row.liftWellDepth} mm
                    </td>
                    <td className="px-3 py-2 text-center font-semibold text-slate-600">
                      {row.cabinWidth} × {row.cabinDepth} mm
                    </td>
                    <td className="px-3 py-2 text-center text-slate-800">
                      {row.entranceOpening} mm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. Pit, Overhead & Machine Room Dimensions by Speed */}
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-base font-bold text-brand-blue-900">
          <span>Pit Depth, Overhead & Machine-Room Dimensions by Travel Speed</span>
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-brand-blue-950 font-semibold text-white">
              <tr>
                <th className="px-4 py-2.5">Speed (m/s)</th>
                <th className="px-4 py-2.5 text-center">Pit Depth (mm)</th>
                <th className="px-4 py-2.5 text-center">Overhead (mm)</th>
                <th className="px-4 py-2.5 text-center">Machine-Room Depth</th>
                <th className="px-4 py-2.5 text-center">Machine-Room Width</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              {PIT_OVERHEAD_DIMENSIONS.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                  <td className="px-4 py-2.5 font-semibold text-brand-blue-900">{row.speed}</td>
                  <td className="px-4 py-2.5 text-center text-slate-700">{row.pitDepth} mm</td>
                  <td className="px-4 py-2.5 text-center text-slate-700">{row.overhead} mm</td>
                  <td className="px-4 py-2.5 text-center text-slate-600">{row.machineRoomDepth}</td>
                  <td className="px-4 py-2.5 text-center text-slate-600">{row.machineRoomWidth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

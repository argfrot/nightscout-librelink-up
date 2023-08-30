/**
 * Interfaces related to the Nightscout API
 *
 * SPDX-License-Identifier: MIT
 */
export interface Treatment
{
    eventType: string;
    created_at: string;
    glucose: number;
    glucoseType: string;
    carbs: number;
    protein: number;
    fat: number;
    insulin: number;
    units: string;
    transmitterId: string;
    sensorCode: string;
    notes: string;
    enteredBy: string;
}

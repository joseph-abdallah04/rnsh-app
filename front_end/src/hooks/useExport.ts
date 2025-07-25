import { useState } from 'react';
import { downloadExcelFile, prepareFramesForExport } from '../utils/exportUtils';
import type { ExportData } from '../utils/exportUtils';

export const useExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  const exportResults = async (
    savedFrames: any[],
    baselineFrameId?: string
  ): Promise<boolean> => {
    if (!savedFrames || savedFrames.length === 0) {
      setExportError('No frames available to export');
      return false;
    }

    setIsExporting(true);
    setExportError(null);

    try {
      // Prepare the export data
      const framesData = prepareFramesForExport(savedFrames, baselineFrameId);
      
      const exportData: ExportData = {
        frames_data: framesData,
        baseline_frame_id: baselineFrameId,
        export_timestamp: new Date().toISOString()
      };

      // Trigger the download
      await downloadExcelFile(exportData);
      
      console.log('Export completed successfully');
      return true;
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Export failed';
      setExportError(errorMessage);
      console.error('Export failed:', error);
      return false;
      
    } finally {
      setIsExporting(false);
    }
  };

  return {
    exportResults,
    isExporting,
    exportError,
    clearExportError: () => setExportError(null)
  };
};
-- AlterTable
ALTER TABLE "Inquiry" ADD COLUMN     "assignedTo" TEXT,
ADD COLUMN     "priority" TEXT NOT NULL DEFAULT 'Medium';

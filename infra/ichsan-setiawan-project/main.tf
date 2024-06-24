provider "google" {}

resource "google_project" "project" {
  name       = "ichsan-setiawan-project"
  project_id = "ichsan-setiawan-project"
  billing_account = "01F589-D9B3AA-077EB0"
}

module "project_services" {
  depends_on = [google_project.project]
  source     = "terraform-google-modules/project-factory/google//modules/project_services"
  version    = "14.4.0"

  project_id = google_project.project.project_id

  activate_apis = [
    "serviceusage.googleapis.com",
    "compute.googleapis.com",
    "container.googleapis.com",
    "iam.googleapis.com",
    "artifactregistry.googleapis.com",
    "admin.googleapis.com",
    "servicenetworking.googleapis.com",
    "storage.googleapis.com",
    "sql-component.googleapis.com",
    "sqladmin.googleapis.com",
  ]
}
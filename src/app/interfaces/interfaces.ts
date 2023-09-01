export interface InstalledSchema {
    client_id: string;
    project_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_secret: string;
    redirect_uris: string[];
}

export interface CredentialSchema {
    access_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    id_token: string;
    expiry_date: number;
}

export interface CloudZoneSchema {
    Identifiant: string;
    Email: string;
    FirstZone: boolean;
    Config: CredentialSchema | InstalledSchema; // Vous pouvez définir un type plus spécifique ici si nécessaire
}
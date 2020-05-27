export interface CreateSequenceRequest {
    template_id: string | number;
    title: string;
    deadline: Date | string;
    input_context?: object;
    user_message?: string;
    color?: string;
    priority?: number;
    thumbnail?: string;
    custom_css_id?: number;
    allocation_date?: Date | string;
    allocation_user?: number;
}

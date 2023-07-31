import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import { decode } from 'base64-arraybuffer';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

// Validar data en base64 y subir a Supabase
export const validFileData = async (file) => {
    try {
        const contentType = file.match(/data:(.*);base64/)?.[1];
        const base64FileData = file.split('base64,')?.[1];
        if (!contentType || !base64FileData) return { success: false, status: 500, message: 'Archivo no valido' };
        const fileName = nanoid();
        const ext = contentType.split('/')[1];
        const path = `${fileName}.${ext}`;

        const { data, error: uploadError } = await supabase.storage.from(SUPABASE_BUCKET).upload(path, decode(base64FileData), {
            contentType,
            upsert: true,
        });
        if (uploadError) { console.log(uploadError); throw new Error('No se puede cargar el archivo en el storage')}
        const url = `${SUPABASE_URL.replace('.co', '.in')}/storage/v1/object/public/${SUPABASE_BUCKET}/${data.path}`;
        return { success: true, data: url };
    } catch (error) {
        return { success: false, message: 'Ocurrio un error mientras se validaba el archivo' };
    }
}
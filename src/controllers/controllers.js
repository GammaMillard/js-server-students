import students from "../../students/students.js"
import { baseUrl } from "../../app.js";
import Usuario from "../../models/usuario.js";
import bcryptjs from 'bcryptjs'



export const getStudents = (req, res) => {
    const { query, params } = req
    if (query.page <= 0 && typeof query.page === 'string') query.page = 1
    let page = Number(query.page) || 1
    let limit = Number(query.limit) || 20

    const pageIni = ((page) - 1) * 20
    console.log(pageIni);
    let response = {
        count: students.length,
        next: `${baseUrl}/student/?page=${(page) + 1}&limit=${limit}`,
        previous: null,
        results: students.slice(pageIni, pageIni + limit)
    }
    res.json(response)
}

export const getSingleStudent = (req, res) => {
    const { params } = req
    console.log(Number(params.id));
    const result = students.find(student => student.student_id === Number(params.id))
    res.json(result)
}



export const getStudentsByMajor = (req, res) => {
    const caseCorrection = req.params.major[0].toUpperCase() + req.params.major.slice(1, req.params.major.length)
    const majorStudents = students.filter(students => students.major === caseCorrection)

    let response = {
        count: majorStudents.length,
        // next: `${baseUrl}/student/?page=${(page) + 1}&limit=${limit}`,
        previous: null,
        results: majorStudents.slice(0, 20)
    }
    res.json(response)
}

export const getMajors = (req, res) => {
    const majors = students.reduce((acc, student) => {
        const shortcutStudent = {
            student_id: student.student_id,
            first_name: student.first_name,
            last_name: student.last_name
        }
        if (!acc.results.hasOwnProperty(student.major)) {
           
            acc.count++
            acc.results[student.major] = {
                studentsInfo :`${baseUrl}/major/${student.major.replace(' ', '')}`,
                count: 1,
                students: [shortcutStudent]
            }
        } else {
            acc.results[student.major].students.push(shortcutStudent)
            acc.results[student.major].count++
        }
        return acc
    }, {
        count: 0,
        next: null,
        previous: null,
        results: {}
    })
    res.json(majors)
}


export const addStudent = async(req,res) => {
   const usuario = new Usuario(req.body)


   //Correo

   //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    
   //Guardaren DB

  await  usuario.save()

    res.json({
        message: 'no',
        body : usuario
    })
}
